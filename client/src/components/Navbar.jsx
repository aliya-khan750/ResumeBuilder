import {
  Menu,
  Sun,
  Bell,
  ChevronDown,
} from "lucide-react";

function Navbar() {
  return (
    <header className="navbar">
      <div className="navbar-left">
        <div className="brand">
          <div className="brand-mark">R</div>
          <span>ResumeCraft</span>
        </div>

        <button className="icon-button" aria-label="Open menu">
          <Menu size={22} />
        </button>
      </div>

      <div className="navbar-right">
        <button className="icon-button" aria-label="Toggle theme">
          <Sun size={20} />
        </button>

        <button className="icon-button" aria-label="Notifications">
          <Bell size={20} />
        </button>

        <button className="profile-button">
          <div className="profile-avatar">A</div>

          <span>Aliya Khan</span>

          <ChevronDown size={17} />
        </button>
      </div>
    </header>
  );
}

export default Navbar;