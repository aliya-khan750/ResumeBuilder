import { useState } from "react";
import "./ForgotPassword.css";

function ForgotPassword() {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();

    setMessage("");
    setError("");

    if (!email.trim()) {
      setError("Please enter your email address.");
      return;
    }

    try {
      setLoading(true);

      const response = await fetch(
        "https://resumecraft-server-v3tm.onrender.com/api/auth/forgot-password",
        {
          method: "POST",

          headers: {
            "Content-Type": "application/json",
          },

          body: JSON.stringify({
            email: email.trim(),
          }),
        }
      );

      const data = await response.json();

      if (!response.ok) {
        throw new Error(
          data.message || "Something went wrong."
        );
      }

      setMessage(
        data.message ||
          "If an account exists with this email, a reset link has been sent."
      );

      setEmail("");

    } catch (error) {
      console.error(
        "Forgot password error:",
        error
      );

      setError(
        error.message ||
          "Unable to send reset link. Please try again."
      );

    } finally {
      setLoading(false);
    }
  };

  // ================= BACK TO LOGIN =================

  const goToLogin = () => {
    window.location.href = "/login";
  };

  return (
    <div className="forgot-password-page">

      {/* ================= LOGO ================= */}

      <div className="forgot-logo">

        <div className="forgot-logo-circle">
          R
        </div>

        <span>
          ResumeCraft
        </span>

      </div>


      {/* ================= HEADING ================= */}

      <h1>
        Forgot Password?
      </h1>


      <p className="forgot-subtitle">
        Enter your email address and we'll send you
        a password reset link.
      </p>


      {/* ================= FORM CARD ================= */}

      <div className="forgot-card">

        <form onSubmit={handleSubmit}>

          {/* ================= EMAIL ================= */}

          <div className="forgot-field">

            <label htmlFor="email">
              Email Address
            </label>

            <input
              id="email"
              type="email"
              placeholder="your@email.com"
              value={email}
              onChange={(e) =>
                setEmail(e.target.value)
              }
              autoComplete="email"
              disabled={loading}
            />

          </div>


          {/* ================= ERROR ================= */}

          {error && (
            <div className="forgot-error">
              {error}
            </div>
          )}


          {/* ================= SUCCESS ================= */}

          {message && (
            <div className="forgot-success">
              {message}
            </div>
          )}


          {/* ================= BUTTON ================= */}

          <button
            type="submit"
            className="forgot-button"
            disabled={loading}
          >

            {loading
              ? "Sending..."
              : "Send Reset Link"}

          </button>

        </form>


        {/* ================= BACK TO LOGIN ================= */}

        <div className="back-login">

          <button
            type="button"
            onClick={goToLogin}
            className="back-login-button"
          >
            ← Back to Login
          </button>

        </div>

      </div>

    </div>
  );
}

export default ForgotPassword;