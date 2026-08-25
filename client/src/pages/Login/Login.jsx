import { useState } from "react";
import "./Login.css";

function Login() {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
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

  // ================= LOGIN =================

  const handleLogin = async (e) => {
    e.preventDefault();

    const { email, password } = formData;

    setLoading(true);
    setError("");

    try {
      const response = await fetch(
        "http://localhost:5000/api/auth/login",
        {
          method: "POST",

          headers: {
            "Content-Type": "application/json",
          },

          body: JSON.stringify({
            email,
            password,
          }),
        }
      );

      const data = await response.json();

      if (!response.ok) {
        setError(data.message || "Invalid email or password.");
        setLoading(false);
        return;
      }

      // ================= SAVE JWT TOKEN =================

      localStorage.setItem("token", data.token);

      // ================= SAVE LOGGED-IN USER =================

      localStorage.setItem(
        "user",
        JSON.stringify(data.user)
      );

      // ================= LOGIN SUCCESS =================

      alert("Login successful! 🎉");

      // ================= GO TO DASHBOARD =================

      window.location.href = "/dashboard";

    } catch (error) {
      console.error("Login error:", error);

      setError(
        "Unable to connect to server. Please try again."
      );
    } finally {
      setLoading(false);
    }
  };

  // =====================================================
  // FORGOT PASSWORD
  // =====================================================

  const handleForgotPassword = () => {
    window.location.href = "/forgot-password";
  };

  // =====================================================
  // RETURN
  // =====================================================

  return (
    <div className="login-page">

      <div className="login-container">

        {/* ================= LOGO ================= */}

        <div
          className="login-logo"
          onClick={() => {
            window.location.href = "/";
          }}
          style={{ cursor: "pointer" }}
        >

          <div className="login-logo-icon">
            R
          </div>

          <span>
            ResumeCraft
          </span>

        </div>


        {/* ================= HEADING ================= */}

        <div className="login-heading">

          <h1>
            Welcome back
          </h1>

          <p>
            Login to continue building your professional resume.
          </p>

        </div>


        {/* ================= LOGIN CARD ================= */}

        <div className="login-card">

          <form onSubmit={handleLogin}>

            {/* ================= EMAIL ================= */}

            <div className="login-form-group">

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


            {/* ================= PASSWORD ================= */}

            <div className="login-form-group">

              <div className="password-label">

                <label>
                  Password
                </label>

                {/* ================= FORGOT PASSWORD ================= */}

                <button
                  type="button"
                  className="forgot-password"
                  onClick={handleForgotPassword}
                >
                  Forgot password?
                </button>

              </div>


              <input
                type="password"
                name="password"
                placeholder="Enter your password"
                value={formData.password}
                onChange={handleChange}
                required
              />

            </div>


            {/* ================= REMEMBER ME ================= */}

            <div className="remember-row">

              <label className="remember-label">

                <input
                  type="checkbox"
                />

                <span>
                  Remember me
                </span>

              </label>

            </div>


            {/* ================= ERROR ================= */}

            {error && (
              <p
                className="login-error"
                style={{
                  color: "#c44d2d",
                  fontSize: "14px",
                  marginBottom: "15px",
                }}
              >
                {error}
              </p>
            )}


            {/* ================= LOGIN BUTTON ================= */}

            <button
              type="submit"
              className="login-button"
              disabled={loading}
            >
              {loading
                ? "Logging in..."
                : "Login"}
            </button>

          </form>


          {/* ================= REGISTER ================= */}

          <div className="register-link">

            <span>
              Don't have an account?
            </span>

            <button
              type="button"
              onClick={() => {
                window.location.href = "/register";
              }}
            >
              Create an account
            </button>

          </div>

        </div>


        {/* ================= BACK TO HOME ================= */}

        <button
          type="button"
          className="back-home"
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

export default Login;