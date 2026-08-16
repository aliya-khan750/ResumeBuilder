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
  return (
    <aside className="sidebar">

      <button className="create-resume-btn">
        <Plus size={19} />
        <span>Create New Resume</span>
      </button>

      <nav className="sidebar-nav">

        <a href="#" className="sidebar-item">
          <LayoutDashboard size={19} />
          <span>Dashboard</span>
        </a>

        <a href="#" className="sidebar-item">
          <FileText size={19} />
          <span>My Resumes</span>
        </a>

        <a href="#" className="sidebar-item active">
          <FileText size={19} />
          <span>Resume Builder</span>
        </a>

        <a href="#" className="sidebar-item">
          <Palette size={19} />
          <span>Templates</span>
        </a>

        <a href="#" className="sidebar-item">
          <Sparkles size={19} />
          <span>AI Assistant</span>
          <span className="new-badge">New</span>
        </a>

        <a href="#" className="sidebar-item">
          <BarChart3 size={19} />
          <span>Analytics</span>
        </a>

        <a href="#" className="sidebar-item">
          <Settings size={19} />
          <span>Settings</span>
        </a>

        <a href="#" className="sidebar-item">
          <User size={19} />
          <span>Profile</span>
        </a>

        <a href="#" className="sidebar-item">
          <LogOut size={19} />
          <span>Logout</span>
        </a>

      </nav>

    </aside>
  );
}

export default Sidebar;