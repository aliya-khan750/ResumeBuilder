import "./Dashboard.css";

function Dashboard() {
  const user = JSON.parse(
    localStorage.getItem("user") || "null"
  );

  const handleLogout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("user");

    window.location.href = "/login";
  };

  return (
    <div className="dashboard-page">

      {/* ================= NAVBAR ================= */}

      <nav className="dashboard-navbar">

        <div className="dashboard-logo">

          <div className="dashboard-logo-icon">
            R
          </div>

          <span>
            ResumeCraft
          </span>

        </div>


        <div className="dashboard-nav-right">

          <span className="dashboard-user-name">
            {user?.name || "User"}
          </span>

          <button
            className="dashboard-logout"
            onClick={handleLogout}
          >
            Logout
          </button>

        </div>

      </nav>


      {/* ================= MAIN ================= */}

      <main className="dashboard-main">

        <div className="dashboard-welcome">

          <span className="dashboard-badge">
            ✦ Your Workspace
          </span>

          <h1>
            Welcome back,{" "}
            {user?.name?.split(" ")[0] || "there"} 👋
          </h1>

          <p>
            Create, manage and customize your professional
            resumes from one place.
          </p>

        </div>


        {/* ================= ACTION CARD ================= */}

        <div className="dashboard-actions">

          <div className="dashboard-create-card">

            <div className="create-icon">
              +
            </div>

            <div className="create-content">

              <h2>
                Create a New Resume
              </h2>

              <p>
                Start from scratch and build an
                ATS-friendly professional resume.
              </p>

            </div>

            <button
              className="create-resume-button"
              onClick={() => {
                window.location.href = "/builder";
              }}
            >
              Create Resume →
            </button>

          </div>


          {/* ================= RECENT RESUMES ================= */}

          <section className="recent-resumes">

            <div className="recent-header">

              <div>
                <h2>
                  My Resumes
                </h2>

                <p>
                  Your saved resumes will appear here.
                </p>
              </div>

            </div>


            <div className="empty-resumes">

              <div className="empty-icon">
                📄
              </div>

              <h3>
                No resumes yet
              </h3>

              <p>
                Create your first resume and it will
                appear here.
              </p>

              <button
                onClick={() => {
                  window.location.href = "/builder";
                }}
              >
                + Create Resume
              </button>

            </div>

          </section>

        </div>

      </main>

    </div>
  );
}

export default Dashboard;