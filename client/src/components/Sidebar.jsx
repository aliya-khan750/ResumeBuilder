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
  X,
} from "lucide-react";


function Sidebar({ isOpen, onClose }) {


  // =====================================================
  // CREATE NEW RESUME
  // =====================================================

  const handleCreateResume = () => {

    if (onClose) {
      onClose();
    }

    window.location.href = "/builder";

  };


  // =====================================================
  // LOGOUT
  // =====================================================

  const handleLogout = () => {

    localStorage.removeItem("token");
    localStorage.removeItem("user");
    localStorage.removeItem("currentResumeId");
    localStorage.removeItem("resumeData");

    window.location.href = "/login";

  };


  // =====================================================
  // NAVIGATION
  // =====================================================

  const navigateTo = (path) => {

    if (onClose) {
      onClose();
    }

    window.location.href = path;

  };


  return (
    <>


      {/* =================================================
          MOBILE OVERLAY
      ================================================= */}

      {isOpen && (

        <div
          className="sidebar-overlay"
          onClick={onClose}
        />

      )}


      {/* =================================================
          SIDEBAR
      ================================================= */}

      <aside
        className={`sidebar ${
          isOpen ? "sidebar-open" : ""
        }`}
      >


        {/* =================================================
            MOBILE CLOSE BUTTON
        ================================================= */}

        <button
          type="button"
          className="mobile-sidebar-close"
          onClick={onClose}
          aria-label="Close menu"
        >

          <X size={22} />

        </button>


        {/* =================================================
            CREATE NEW RESUME
        ================================================= */}

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


        {/* =================================================
            NAVIGATION
        ================================================= */}

        <nav className="sidebar-nav">


          {/* =================================================
              DASHBOARD
          ================================================= */}

          <button
            type="button"
            className="sidebar-item"
            onClick={() =>
              navigateTo("/dashboard")
            }
          >

            <LayoutDashboard size={19} />

            <span>
              Dashboard
            </span>

          </button>


          {/* =================================================
              MY RESUMES
          ================================================= */}

          <button
            type="button"
            className="sidebar-item"
            onClick={() =>
              navigateTo("/my-resumes")
            }
          >

            <FileText size={19} />

            <span>
              My Resumes
            </span>

          </button>


          {/* =================================================
              RESUME BUILDER
          ================================================= */}

          <button
            type="button"
            className="sidebar-item"
            onClick={() =>
              navigateTo("/builder")
            }
          >

            <FileText size={19} />

            <span>
              Resume Builder
            </span>

          </button>


          {/* =================================================
              TEMPLATES
          ================================================= */}

          <button
            type="button"
            className="sidebar-item"
            onClick={() =>
              navigateTo("/templates")
            }
          >

            <Palette size={19} />

            <span>
              Templates
            </span>

          </button>


          {/* =================================================
              AI ASSISTANT
          ================================================= */}

          <button
            type="button"
            className="sidebar-item"
            onClick={() =>
              navigateTo("/ai-assistant")
            }
          >

            <Sparkles size={19} />

            <span>
              AI Assistant
            </span>

            <span className="new-badge">
              New
            </span>

          </button>


          {/* =================================================
              ANALYTICS
          ================================================= */}

          <button
            type="button"
            className="sidebar-item"
            onClick={() =>
              navigateTo("/analytics")
            }
          >

            <BarChart3 size={19} />

            <span>
              Analytics
            </span>

          </button>


          {/* =================================================
              SETTINGS
          ================================================= */}

          <button
            type="button"
            className="sidebar-item"
            onClick={() =>
              navigateTo("/settings")
            }
          >

            <Settings size={19} />

            <span>
              Settings
            </span>

          </button>


          {/* =================================================
              PROFILE
          ================================================= */}

          <button
            type="button"
            className="sidebar-item"
            onClick={() =>
              navigateTo("/profile")
            }
          >

            <User size={19} />

            <span>
              Profile
            </span>

          </button>


          {/* =================================================
              LOGOUT
          ================================================= */}

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

    </>
  );

}


export default Sidebar;