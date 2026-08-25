import { useState } from "react";
import "./ResetPassword.css";

function ResetPassword() {
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const [message, setMessage] = useState("");
  const [error, setError] = useState("");

  const [loading, setLoading] = useState(false);

  // =====================================================
  // GET RESET TOKEN FROM URL
  // =====================================================

  const path = window.location.pathname;

  const token = path.split("/reset-password/")[1];

  // =====================================================
  // RESET PASSWORD
  // =====================================================

  const handleSubmit = async (e) => {
    e.preventDefault();

    setMessage("");
    setError("");

    // Check token
    if (!token) {
      setError("Invalid password reset link.");
      return;
    }

    // Check password
    if (!password || !confirmPassword) {
      setError("Please enter both password fields.");
      return;
    }

    // Minimum password
    if (password.length < 6) {
      setError(
        "Password must be at least 6 characters long."
      );
      return;
    }

    // Confirm password
    if (password !== confirmPassword) {
      setError("Passwords do not match.");
      return;
    }

    try {
      setLoading(true);

      const response = await fetch(
        `https://resumecraft-server-v3tm.onrender.com/api/auth/reset-password/${token}`,
        {
          method: "POST",

          headers: {
            "Content-Type": "application/json",
          },

          body: JSON.stringify({
            password,
          }),
        }
      );

      const data = await response.json();

      if (!response.ok) {
        setError(
          data.message ||
            "Unable to reset password."
        );

        return;
      }

      // Success
      setMessage(
        data.message ||
          "Password reset successfully."
      );

      setPassword("");
      setConfirmPassword("");

    } catch (error) {
      console.error(
        "Reset password error:",
        error
      );

      setError(
        "Unable to connect to server. Please try again."
      );

    } finally {
      setLoading(false);
    }
  };

  // =====================================================
  // RETURN
  // =====================================================

  return (
    <div className="reset-password-page">

      {/* ================= LOGO ================= */}

      <div
        className="reset-logo"
        onClick={() => {
          window.location.href = "/";
        }}
      >

        <div className="reset-logo-circle">
          R
        </div>

        <span>
          ResumeCraft
        </span>

      </div>


      {/* ================= HEADING ================= */}

      <h1>
        Reset Password
      </h1>

      <p className="reset-subtitle">
        Create a new password for your
        ResumeCraft account.
      </p>


      {/* ================= CARD ================= */}

      <div className="reset-card">

        <form onSubmit={handleSubmit}>

          {/* ================= NEW PASSWORD ================= */}

          <div className="reset-field">

            <label htmlFor="password">
              New Password
            </label>

            <input
              id="password"
              type="password"
              placeholder="Enter new password"
              value={password}
              onChange={(e) =>
                setPassword(e.target.value)
              }
              autoComplete="new-password"
            />

          </div>


          {/* ================= CONFIRM PASSWORD ================= */}

          <div className="reset-field">

            <label htmlFor="confirmPassword">
              Confirm Password
            </label>

            <input
              id="confirmPassword"
              type="password"
              placeholder="Confirm new password"
              value={confirmPassword}
              onChange={(e) =>
                setConfirmPassword(e.target.value)
              }
              autoComplete="new-password"
            />

          </div>


          {/* ================= ERROR ================= */}

          {error && (
            <div className="reset-error">
              {error}
            </div>
          )}


          {/* ================= SUCCESS ================= */}

          {message && (
            <div className="reset-success">
              {message}
            </div>
          )}


          {/* ================= BUTTON ================= */}

          <button
            type="submit"
            className="reset-button"
            disabled={loading}
          >
            {loading
              ? "Resetting..."
              : "Reset Password"}
          </button>

        </form>


        {/* ================= BACK TO LOGIN ================= */}

        <div className="reset-back-login">

          <button
            type="button"
            onClick={() => {
              window.location.href = "/login";
            }}
          >
            ← Back to Login
          </button>

        </div>

      </div>

    </div>
  );
}

export default ResetPassword;
