const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const crypto = require("crypto");
const nodemailer = require("nodemailer");

const User = require("../models/User");


// =====================================================
// REGISTER USER
// =====================================================

const registerUser = async (req, res) => {
  try {
    const { name, email, password } = req.body;

    // Check required fields
    if (!name || !email || !password) {
      return res.status(400).json({
        message: "Please enter name, email and password.",
      });
    }

    // Check if user already exists
    const existingUser = await User.findOne({
      email: email.toLowerCase().trim(),
    });

    if (existingUser) {
      return res.status(400).json({
        message: "User already exists.",
      });
    }

    // Hash password
    const hashedPassword = await bcrypt.hash(password, 10);

    // Create user
    const user = await User.create({
      name: name.trim(),
      email: email.toLowerCase().trim(),
      password: hashedPassword,
    });

    // Response
    res.status(201).json({
      message: "Account created successfully.",
      user: {
        id: user._id,
        name: user.name,
        email: user.email,
      },
    });

  } catch (error) {
    console.error(
      "Registration error:",
      error.message
    );

    res.status(500).json({
      message: "Server error during registration.",
    });
  }
};


// =====================================================
// LOGIN USER
// =====================================================

const loginUser = async (req, res) => {
  try {
    const { email, password } = req.body;

    // Check fields
    if (!email || !password) {
      return res.status(400).json({
        message: "Please enter email and password.",
      });
    }

    // Find user
    const user = await User.findOne({
      email: email.toLowerCase().trim(),
    });

    if (!user) {
      return res.status(401).json({
        message: "Invalid email or password.",
      });
    }

    // Compare password
    const isPasswordCorrect =
      await bcrypt.compare(
        password,
        user.password
      );

    if (!isPasswordCorrect) {
      return res.status(401).json({
        message: "Invalid email or password.",
      });
    }

    // Create JWT token
    const token = jwt.sign(
      {
        userId: user._id,
      },
      process.env.JWT_SECRET,
      {
        expiresIn: "7d",
      }
    );

    // Successful login
    res.status(200).json({
      message: "Login successful.",
      token,

      user: {
        id: user._id,
        name: user.name,
        email: user.email,
      },
    });

  } catch (error) {
    console.error(
      "Login error:",
      error.message
    );

    res.status(500).json({
      message: "Server error during login.",
    });
  }
};


// =====================================================
// FORGOT PASSWORD
// =====================================================

const forgotPassword = async (req, res) => {
  try {
    const { email } = req.body;

    // Check email
    if (!email) {
      return res.status(400).json({
        message: "Please enter your email address.",
      });
    }

    // Find user
    const user = await User.findOne({
      email: email.toLowerCase().trim(),
    });

    /*
      Security:
      We don't reveal whether an email exists.
    */

    if (!user) {
      return res.status(200).json({
        message:
          "If an account with this email exists, a password reset link has been sent.",
      });
    }

    // Generate random token
    const resetToken =
      crypto.randomBytes(32).toString("hex");

    // Save token in database
    user.resetPasswordToken = resetToken;

    // Token expires after 15 minutes
    user.resetPasswordExpires =
      Date.now() + 15 * 60 * 1000;

    await user.save();

    // =================================================
    // EMAIL TRANSPORTER
    // =================================================

    const transporter =
      nodemailer.createTransport({
        service: "gmail",

        auth: {
          user: process.env.EMAIL_USER,
          pass: process.env.EMAIL_PASSWORD,
        },
      });


    // =================================================
    // RESET URL
    // =================================================

    const resetUrl =
      `${process.env.CLIENT_URL}/reset-password/${resetToken}`;


    // =================================================
    // EMAIL
    // =================================================

    const mailOptions = {
      from: `"ResumeCraft" <${process.env.EMAIL_USER}>`,

      to: user.email,

      subject: "ResumeCraft - Password Reset",

      html: `
        <div
          style="
            font-family: Arial, sans-serif;
            max-width: 600px;
            margin: auto;
            padding: 30px;
            border: 1px solid #ddd;
            border-radius: 10px;
          "
        >

          <h2 style="color: #b84d2c;">
            ResumeCraft
          </h2>

          <h3>
            Password Reset Request
          </h3>

          <p>
            Hello ${user.name},
          </p>

          <p>
            We received a request to reset your
            ResumeCraft account password.
          </p>

          <p>
            Click the button below to create
            a new password.
          </p>

          <div style="margin: 30px 0;">

            <a
              href="${resetUrl}"
              style="
                background: #b84d2c;
                color: white;
                padding: 12px 22px;
                text-decoration: none;
                border-radius: 6px;
                display: inline-block;
                font-weight: bold;
              "
            >
              Reset Password
            </a>

          </div>

          <p>
            This link will expire in
            <strong>15 minutes</strong>.
          </p>

          <p>
            If you did not request a password reset,
            you can safely ignore this email.
          </p>

          <hr />

          <p
            style="
              color: #777;
              font-size: 12px;
            "
          >
            ResumeCraft
          </p>

        </div>
      `,
    };


    // Send email
    await transporter.sendMail(
      mailOptions
    );


    // Response
    res.status(200).json({
      message:
        "If an account with this email exists, a password reset link has been sent.",
    });

  } catch (error) {
    console.error(
      "Forgot password error:",
      error.message
    );

    res.status(500).json({
      message:
        "Unable to process password reset request.",
    });
  }
};


// =====================================================
// RESET PASSWORD
// =====================================================

const resetPassword = async (req, res) => {
  try {
    const { token } = req.params;

    const { password } = req.body;

    // Check password
    if (!password) {
      return res.status(400).json({
        message: "Please enter a new password.",
      });
    }

    // Minimum password length
    if (password.length < 6) {
      return res.status(400).json({
        message:
          "Password must be at least 6 characters long.",
      });
    }

    // Find user using token
    const user = await User.findOne({
      resetPasswordToken: token,

      resetPasswordExpires: {
        $gt: Date.now(),
      },
    });

    // Invalid / expired token
    if (!user) {
      return res.status(400).json({
        message:
          "Password reset link is invalid or has expired.",
      });
    }

    // Hash new password
    const hashedPassword =
      await bcrypt.hash(password, 10);

    // Update password
    user.password = hashedPassword;

    // Remove reset token
    user.resetPasswordToken = null;

    user.resetPasswordExpires = null;

    // Save user
    await user.save();

    // Success
    res.status(200).json({
      message:
        "Password reset successfully. You can now login with your new password.",
    });

  } catch (error) {
    console.error(
      "Reset password error:",
      error.message
    );

    res.status(500).json({
      message:
        "Server error while resetting password.",
    });
  }
};


// =====================================================
// EXPORT
// =====================================================

module.exports = {
  registerUser,
  loginUser,
  forgotPassword,
  resetPassword,
};