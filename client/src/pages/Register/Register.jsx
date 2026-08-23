import "./Register.css";

function Register() {
  const handleRegister = (e) => {
    e.preventDefault();

    // Actual registration backend + MongoDB ke saath baad mein connect karenge.
    alert("Registration functionality will be connected soon.");
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
                placeholder="Enter your full name"
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
                placeholder="Enter your email"
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
                placeholder="Create a password"
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
                placeholder="Confirm your password"
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


            {/* Register Button */}

            <button
              type="submit"
              className="register-button"
            >
              Create Account
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