import "./Home.css";

function Home() {
  return (
    <div className="home-page">

      {/* ================= NAVBAR ================= */}

      <nav className="home-navbar">

        <div className="home-logo">
          <div className="logo-icon">
            R
          </div>

          <span>
            ResumeCraft
          </span>
        </div>

        <div className="home-nav-actions">

          {/* LOGIN */}

          <button
            className="nav-login"
            onClick={() => {
              window.location.href = "/login";
            }}
          >
            Login
          </button>


          {/* SIGN UP */}

          <button
            className="nav-signup"
            onClick={() => {
              window.location.href = "/register";
            }}
          >
            Sign Up
          </button>

        </div>

      </nav>


      {/* ================= HERO ================= */}

      <main className="home-hero">

        <div className="hero-content">

          <span className="hero-badge">
            ✦ Build your future
          </span>

          <h1>
            Create a resume
            <br />
            that gets you
            <span> noticed.</span>
          </h1>

          <p>
            Build a professional, ATS-friendly resume
            in minutes. Customize your resume,
            highlight your skills, and download it
            whenever you're ready.
          </p>

          <div className="hero-buttons">

            {/* CREATE RESUME */}

            <button
              className="primary-hero-button"
              onClick={() => {
                window.location.href = "/login";
              }}
            >
              Create My Resume
              <span>→</span>
            </button>


            {/* TEMPLATES */}

            <button
              className="secondary-hero-button"
              onClick={() => {
                alert("Templates page coming soon!");
              }}
            >
              Explore Templates
            </button>

          </div>

        </div>


        {/* ================= RESUME CARD ================= */}

        <div className="hero-resume-wrapper">

          <div className="hero-resume-card">

            <div className="mini-resume-header">

              <div className="mini-avatar">
                A
              </div>

              <div>

                <h3>
                  YOUR NAME
                </h3>

                <p>
                  Full Stack Developer
                </p>

              </div>

            </div>


            {/* SUMMARY */}

            <div className="mini-section">

              <h4>
                PROFESSIONAL SUMMARY
              </h4>

              <div className="mini-lines">

                <span></span>
                <span></span>
                <span></span>

              </div>

            </div>


            {/* EXPERIENCE */}

            <div className="mini-section">

              <h4>
                EXPERIENCE
              </h4>

              <div className="mini-experience">

                <strong>
                  Software Developer
                </strong>

                <small>
                  Company Name · 2024 - Present
                </small>

                <div className="mini-lines">

                  <span></span>
                  <span></span>

                </div>

              </div>

            </div>


            {/* EDUCATION */}

            <div className="mini-section">

              <h4>
                EDUCATION
              </h4>

              <div className="mini-experience">

                <strong>
                  B.Tech Computer Science
                </strong>

                <small>
                  University Name · 2023 - 2027
                </small>

              </div>

            </div>


            {/* SKILLS */}

            <div className="mini-section">

              <h4>
                SKILLS
              </h4>

              <div className="mini-skills">

                <span>
                  React
                </span>

                <span>
                  Node.js
                </span>

                <span>
                  MongoDB
                </span>

                <span>
                  JavaScript
                </span>

              </div>

            </div>

          </div>

        </div>

      </main>


      {/* ================= FEATURES ================= */}

      <section className="home-features">

        <div className="feature-heading">

          <span>
            WHY RESUMECRAFT?
          </span>

          <h2>
            Everything you need to
            build a better resume.
          </h2>

        </div>


        <div className="feature-grid">

          {/* ATS */}

          <div className="feature-card">

            <div className="feature-icon">
              ✓
            </div>

            <h3>
              ATS Friendly
            </h3>

            <p>
              Create clean and professional
              resumes designed to work well
              with applicant tracking systems.
            </p>

          </div>


          {/* CUSTOMIZE */}

          <div className="feature-card">

            <div className="feature-icon">
              ✦
            </div>

            <h3>
              Easy to Customize
            </h3>

            <p>
              Add your experience, education,
              projects, skills and more with
              our simple resume editor.
            </p>

          </div>


          {/* PDF */}

          <div className="feature-card">

            <div className="feature-icon">
              ↗
            </div>

            <h3>
              Download as PDF
            </h3>

            <p>
              Create your resume once and
              download a professional PDF
              whenever you need it.
            </p>

          </div>

        </div>

      </section>

    </div>
  );
}

export default Home;