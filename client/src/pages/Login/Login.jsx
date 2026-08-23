import "./Login.css";

function Login() {
  const handleLogin = (e) => {
    e.preventDefault();

    // Actual authentication hum baad mein
    // MERN backend + MongoDB ke saath add karenge.
    alert("Login functionality will be connected soon.");
  };

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
                placeholder="Enter your email"
                required
              />

            </div>


            {/* ================= PASSWORD ================= */}

            <div className="login-form-group">

              <div className="password-label">

                <label>
                  Password
                </label>

                <button
                  type="button"
                  className="forgot-password"
                  onClick={() => {
                    alert("Password reset will be added soon.");
                  }}
                >
                  Forgot password?
                </button>

              </div>

              <input
                type="password"
                placeholder="Enter your password"
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


            {/* ================= LOGIN BUTTON ================= */}

            <button
              type="submit"
              className="login-button"
            >
              Login
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