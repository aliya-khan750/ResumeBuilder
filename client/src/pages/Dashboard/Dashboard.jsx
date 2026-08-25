import { useEffect, useState } from "react";
import "./Dashboard.css";

function Dashboard() {
  const user = JSON.parse(
    localStorage.getItem("user") || "null"
  );

  const [resumes, setResumes] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  // ================= FETCH RESUMES =================

  const fetchResumes = async () => {
    const token = localStorage.getItem("token");

    if (!token) {
      window.location.href = "/login";
      return;
    }

    try {
      const response = await fetch(
        "https://resumecraft-server-v3tm.onrender.com/api/resumes",
        {
          method: "GET",

          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      const data = await response.json();

      if (!response.ok) {
        setError(
          data.message || "Unable to load resumes."
        );
        return;
      }

      setResumes(data.resumes || []);
    } catch (error) {
      console.error("Fetch resumes error:", error);

      setError(
        "Unable to connect to server."
      );
    } finally {
      setLoading(false);
    }
  };

  // ================= LOAD RESUMES =================

  useEffect(() => {
    fetchResumes();
  }, []);


  // ================= DELETE RESUME =================

  const handleDelete = async (resumeId) => {
    const confirmDelete = window.confirm(
      "Are you sure you want to delete this resume?"
    );

    if (!confirmDelete) {
      return;
    }

    const token = localStorage.getItem("token");

    try {
      const response = await fetch(
        `https://resumecraft-server-v3tm.onrender.com/api/resumes/${resumeId}`,
        {
          method: "DELETE",

          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      const data = await response.json();

      if (!response.ok) {
        alert(
          data.message || "Failed to delete resume."
        );
        return;
      }

      // Remove deleted resume from screen
      setResumes((prevResumes) =>
        prevResumes.filter(
          (resume) => resume._id !== resumeId
        )
      );

    } catch (error) {
      console.error("Delete resume error:", error);

      alert(
        "Unable to connect to server."
      );
    }
  };


  // ================= OPEN RESUME =================

  const handleOpenResume = (resumeId) => {
    window.location.href = `/builder?id=${resumeId}`;
  };


  // ================= LOGOUT =================

  const handleLogout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("user");
    localStorage.removeItem("currentResumeId");
    localStorage.removeItem("resumeData");

    window.location.href = "/login";
  };


  // ================= DATE FORMAT =================

  const formatDate = (date) => {
    if (!date) {
      return "";
    }

    return new Date(date).toLocaleDateString(
      "en-IN",
      {
        day: "numeric",
        month: "short",
        year: "numeric",
      }
    );
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
            Create, manage and customize your
            professional resumes from one place.
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


          {/* ================= MY RESUMES ================= */}

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


            {/* ================= LOADING ================= */}

            {loading && (

              <div className="empty-resumes">

                <div className="empty-icon">
                  ⏳
                </div>

                <h3>
                  Loading resumes...
                </h3>

                <p>
                  Please wait while we fetch your resumes.
                </p>

              </div>

            )}


            {/* ================= ERROR ================= */}

            {!loading && error && (

              <div className="empty-resumes">

                <div className="empty-icon">
                  ⚠️
                </div>

                <h3>
                  Something went wrong
                </h3>

                <p>
                  {error}
                </p>

                <button
                  onClick={fetchResumes}
                >
                  Try Again
                </button>

              </div>

            )}


            {/* ================= NO RESUMES ================= */}

            {!loading &&
              !error &&
              resumes.length === 0 && (

                <div className="empty-resumes">

                  <div className="empty-icon">
                    📄
                  </div>

                  <h3>
                    No resumes yet
                  </h3>

                  <p>
                    Create your first resume and it
                    will appear here.
                  </p>

                  <button
                    onClick={() => {
                      window.location.href =
                        "/builder";
                    }}
                  >
                    + Create Resume
                  </button>

                </div>

              )}


            {/* ================= RESUME LIST ================= */}

            {!loading &&
              !error &&
              resumes.length > 0 && (

                <div className="resume-list">

                  {resumes.map((resume) => (

                    <div
                      className="resume-card"
                      key={resume._id}
                    >

                      {/* ================= ICON ================= */}

                      <div className="resume-card-icon">
                        📄
                      </div>


                      {/* ================= INFORMATION ================= */}

                      <div className="resume-card-content">

                        <h3>
                          {resume.title ||
                            "My Resume"}
                        </h3>

                        <p>
                          Last updated:{" "}
                          {formatDate(
                            resume.updatedAt
                          )}
                        </p>

                      </div>


                      {/* ================= ACTIONS ================= */}

                      <div className="resume-card-actions">

                        {/* OPEN */}

                        <button
                          type="button"
                          onClick={() =>
                            handleOpenResume(
                              resume._id
                            )
                          }
                        >
                          Open
                        </button>


                        {/* DELETE */}

                        <button
                          type="button"
                          onClick={() =>
                            handleDelete(
                              resume._id
                            )
                          }
                        >
                          Delete
                        </button>

                      </div>

                    </div>

                  ))}

                </div>

              )}

          </section>

        </div>

      </main>

    </div>
  );
}

export default Dashboard;