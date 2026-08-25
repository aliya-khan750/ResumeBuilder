import { useEffect, useState } from "react";
import "./MyResumes.css";

function MyResumes() {
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


  // ================= LOAD =================

  useEffect(() => {
    fetchResumes();
  }, []);


  // ================= DELETE =================

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

      setResumes((prev) =>
        prev.filter(
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


  // ================= OPEN =================

  const handleOpen = (resumeId) => {
    window.location.href =
      `/builder?id=${resumeId}`;
  };


  // ================= DATE =================

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
    <div className="my-resumes-page">

      {/* ================= NAVBAR ================= */}

      <nav className="my-resumes-navbar">

        <div
          className="my-resumes-logo"
          onClick={() => {
            window.location.href = "/dashboard";
          }}
        >

          <div className="my-resumes-logo-icon">
            R
          </div>

          <span>
            ResumeCraft
          </span>

        </div>


        <button
          className="my-resumes-create-button"
          onClick={() => {
            window.location.href = "/builder";
          }}
        >
          + Create Resume
        </button>

      </nav>


      {/* ================= MAIN ================= */}

      <main className="my-resumes-main">

        <div className="my-resumes-heading">

          <span className="my-resumes-badge">
            ✦ Your Resumes
          </span>

          <h1>
            My Resumes
          </h1>

          <p>
            Manage, edit and organize all your
            saved resumes in one place.
          </p>

        </div>


        {/* ================= LOADING ================= */}

        {loading && (

          <div className="my-resumes-empty">

            <div className="my-resumes-empty-icon">
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

          <div className="my-resumes-empty">

            <div className="my-resumes-empty-icon">
              ⚠️
            </div>

            <h3>
              Something went wrong
            </h3>

            <p>
              {error}
            </p>

            <button onClick={fetchResumes}>
              Try Again
            </button>

          </div>

        )}


        {/* ================= NO RESUMES ================= */}

        {!loading &&
          !error &&
          resumes.length === 0 && (

            <div className="my-resumes-empty">

              <div className="my-resumes-empty-icon">
                📄
              </div>

              <h3>
                No resumes yet
              </h3>

              <p>
                Create your first resume and
                it will appear here.
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

            <div className="my-resumes-list">

              {resumes.map((resume) => (

                <div
                  className="my-resume-card"
                  key={resume._id}
                >

                  <div className="my-resume-icon">
                    📄
                  </div>


                  <div className="my-resume-info">

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


                  <div className="my-resume-actions">

                    <button
                      className="open-resume-button"
                      onClick={() =>
                        handleOpen(
                          resume._id
                        )
                      }
                    >
                      Open
                    </button>

                    <button
                      className="delete-resume-button"
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

      </main>

    </div>
  );
}

export default MyResumes;