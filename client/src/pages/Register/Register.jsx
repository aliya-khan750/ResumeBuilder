import { useState } from "react";
import "./Register.css";

function Register() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  // ================= HANDLE INPUT =================

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));

    setError("");
  };

  // ================= REGISTER =================

  const handleRegister = async (e) => {
    e.preventDefault();

    const {
      name,
      email,
      password,
      confirmPassword,
    } = formData;

    // Password match check
    if (password !== confirmPassword) {
      setError("Passwords do not match.");
      return;
    }

    setLoading(true);
    setError("");

    try {
      const response = await fetch(
        "https://resumecraft-server-v3tm.onrender.com/api/auth/register",
        {
          method: "POST",

          headers: {
            "Content-Type": "application/json",
          },

          body: JSON.stringify({
            name,
            email,
            password,
          }),
        }
      );

      const data = await response.json();

      if (!response.ok) {
        setError(data.message || "Registration failed.");
        setLoading(false);
        return;
      }

      alert("Account created successfully! 🎉");

      // Go to Login
      window.location.href = "/login";
    } catch (error) {
      console.error("Registration error:", error);

      setError(
        "Unable to connect to server. Please try again."
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="register-page">

      <div className="register-container">

        {/* ================= LOGO ================= */}

        <div
          className="register-logo"
          onClick={() => {
            window.location.href = "/";
          }}
          style={{ cursor: "pointer" }}
        >
          <div className="register-logo-icon">
            R
          </div>

          <span>
            ResumeCraft
          </span>
        </div>


        {/* ================= HEADING ================= */}

        <div className="register-heading">

          <h1>
            Create your account
          </h1>

          <p>
            Start building your professional resume today.
          </p>

        </div>


        {/* ================= REGISTER CARD ================= */}

        <div className="register-card">

          <form onSubmit={handleRegister}>

            {/* Full Name */}

            <div className="register-form-group">

              <label>
                Full Name
              </label>

              <input
                type="text"
                name="name"
                placeholder="Enter your full name"
                value={formData.name}
                onChange={handleChange}
                required
              />

            </div>


            {/* Email */}

            <div className="register-form-group">

              <label>
                Email Address
              </label>

              <input
                type="email"
                name="email"
                placeholder="Enter your email"
                value={formData.email}
                onChange={handleChange}
                required
              />

            </div>


            {/* Password */}

            <div className="register-form-group">

              <label>
                Password
              </label>

              <input
                type="password"
                name="password"
                placeholder="Create a password"
                value={formData.password}
                onChange={handleChange}
                required
              />

            </div>


            {/* Confirm Password */}

            <div className="register-form-group">

              <label>
                Confirm Password
              </label>

              <input
                type="password"
                name="confirmPassword"
                placeholder="Confirm your password"
                value={formData.confirmPassword}
                onChange={handleChange}
                required
              />

            </div>


            {/* Terms */}

            <div className="terms-row">

              <label className="terms-label">

                <input
                  type="checkbox"
                  required
                />

                <span>
                  I agree to the Terms & Conditions
                </span>

              </label>

            </div>


            {/* Error */}

            {error && (
              <p
                className="register-error"
                style={{
                  color: "#c44d2d",
                  marginBottom: "15px",
                  fontSize: "14px",
                }}
              >
                {error}
              </p>
            )}


            {/* Register Button */}

            <button
              type="submit"
              className="register-button"
              disabled={loading}
            >
              {loading
                ? "Creating Account..."
                : "Create Account"}
            </button>

          </form>


          {/* Login */}

          <div className="login-link">

            <span>
              Already have an account?
            </span>

            <button
              type="button"
              onClick={() => {
                window.location.href = "/login";
              }}
            >
              Login
            </button>

          </div>

        </div>


        {/* Back Home */}

        <button
          type="button"
          className="register-back-home"
          onClick={() => {
            window.location.href = "/";
          }}
        >
          ← Back to Home
        </button>

      </div>

    </div>
  );
}

export default Register;