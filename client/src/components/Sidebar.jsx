import {
  LayoutDashboard,
  FileText,
  Palette,
  Sparkles,
  BarChart3,
  Settings,
  User,
  LogOut,
  Plus,
} from "lucide-react";

function Sidebar() {

  // ================= CREATE NEW RESUME =================

  const handleCreateResume = () => {
    window.location.href = "/builder";
  };


  // ================= LOGOUT =================

  const handleLogout = () => {

    localStorage.removeItem("token");
    localStorage.removeItem("user");
    localStorage.removeItem("currentResumeId");
    localStorage.removeItem("resumeData");

    window.location.href = "/login";
  };


  return (

    <aside className="sidebar">


      {/* ================= CREATE NEW RESUME ================= */}

      <button
        type="button"
        className="create-resume-btn"
        onClick={handleCreateResume}
      >

        <Plus size={19} />

        <span>
          Create New Resume
        </span>

      </button>


      {/* ================= NAVIGATION ================= */}

      <nav className="sidebar-nav">


        {/* ================= DASHBOARD ================= */}

        <button
          type="button"
          className="sidebar-item"
          onClick={() => {
            window.location.href = "/dashboard";
          }}
        >

          <LayoutDashboard size={19} />

          <span>
            Dashboard
          </span>

        </button>


        {/* ================= MY RESUMES ================= */}

        <button
          type="button"
          className="sidebar-item"
          onClick={() => {
            window.location.href = "/my-resumes";
          }}
        >

          <FileText size={19} />

          <span>
            My Resumes
          </span>

        </button>


        {/* ================= RESUME BUILDER ================= */}

        <button
          type="button"
          className="sidebar-item active"
          onClick={() => {
            window.location.href = "/builder";
          }}
        >

          <FileText size={19} />

          <span>
            Resume Builder
          </span>

        </button>


        {/* ================= TEMPLATES ================= */}

        <button
          type="button"
          className="sidebar-item"
          onClick={() => {
            window.location.href = "/templates";
          }}
        >

          <Palette size={19} />

          <span>
            Templates
          </span>

        </button>


        {/* ================= AI ASSISTANT ================= */}

        <button
          type="button"
          className="sidebar-item"
          onClick={() => {
            alert("AI Assistant will be added soon.");
          }}
        >

          <Sparkles size={19} />

          <span>
            AI Assistant
          </span>

          <span className="new-badge">
            New
          </span>

        </button>


        {/* ================= ANALYTICS ================= */}

        <button
          type="button"
          className="sidebar-item"
          onClick={() => {
            alert("Analytics will be added soon.");
          }}
        >

          <BarChart3 size={19} />

          <span>
            Analytics
          </span>

        </button>


        {/* ================= SETTINGS ================= */}

        <button
          type="button"
          className="sidebar-item"
          onClick={() => {
            alert("Settings will be added soon.");
          }}
        >

          <Settings size={19} />

          <span>
            Settings
          </span>

        </button>


        {/* ================= PROFILE ================= */}

        <button
          type="button"
          className="sidebar-item"
          onClick={() => {
            alert("Profile will be added soon.");
          }}
        >

          <User size={19} />

          <span>
            Profile
          </span>

        </button>


        {/* ================= LOGOUT ================= */}

        <button
          type="button"
          className="sidebar-item"
          onClick={handleLogout}
        >

          <LogOut size={19} />

          <span>
            Logout
          </span>

        </button>


      </nav>

    </aside>
  );
}

export default Sidebar;