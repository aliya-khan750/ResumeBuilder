import {
  Settings as SettingsIcon,
  Lock,
  Bell,
  ShieldCheck,
  LogOut,
  ChevronRight,
} from "lucide-react";

import "./Settings.css";

function Settings() {

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

  const handleProfile = () => {
    window.location.href = "/profile";
  };


  const handleChangePassword = () => {
    window.location.href = "/forgot-password";
  };


  return (

    <div className="settings-page">

      {/* =================================================
          HEADER
      ================================================= */}

      <div className="settings-header">

        <div className="settings-header-icon">
          <SettingsIcon size={25} />
        </div>

        <div>

          <h1>
            Settings
          </h1>

          <p>
            Manage your ResumeCraft account and preferences.
          </p>

        </div>

      </div>


      {/* =================================================
          ACCOUNT SETTINGS
      ================================================= */}

      <section className="settings-section">

        <div className="settings-section-header">

          <div>
            <h2>
              Account
            </h2>

            <p>
              Manage your account information and security.
            </p>
          </div>

        </div>


        {/* PROFILE */}

        <button
          type="button"
          className="settings-item"
          onClick={handleProfile}
        >

          <div className="settings-item-left">

            <div className="settings-item-icon">
              <ShieldCheck size={19} />
            </div>

            <div>

              <h3>
                Profile
              </h3>

              <p>
                View and manage your personal information.
              </p>

            </div>

          </div>

          <ChevronRight size={19} />

        </button>


        {/* PASSWORD */}

        <button
          type="button"
          className="settings-item"
          onClick={handleChangePassword}
        >

          <div className="settings-item-left">

            <div className="settings-item-icon">
              <Lock size={19} />
            </div>

            <div>

              <h3>
                Change Password
              </h3>

              <p>
                Reset or update your account password.
              </p>

            </div>

          </div>

          <ChevronRight size={19} />

        </button>

      </section>


      {/* =================================================
          NOTIFICATIONS
      ================================================= */}

      <section className="settings-section">

        <div className="settings-section-header">

          <div>

            <h2>
              Notifications
            </h2>

            <p>
              Manage how ResumeCraft keeps you informed.
            </p>

          </div>

        </div>


        <div className="settings-item settings-item-static">

          <div className="settings-item-left">

            <div className="settings-item-icon">
              <Bell size={19} />
            </div>

            <div>

              <h3>
                Email Notifications
              </h3>

              <p>
                Receive important account and resume updates.
              </p>

            </div>

          </div>


          <label className="settings-toggle">

            <input
              type="checkbox"
              defaultChecked
            />

            <span className="settings-toggle-slider"></span>

          </label>

        </div>

      </section>


      {/* =================================================
          SECURITY
      ================================================= */}

      <section className="settings-section">

        <div className="settings-section-header">

          <div>

            <h2>
              Security
            </h2>

            <p>
              Keep your ResumeCraft account secure.
            </p>

          </div>

        </div>


        <div className="security-message">

          <ShieldCheck size={22} />

          <div>

            <h3>
              Your account is protected
            </h3>

            <p>
              Your password is securely encrypted and your
              sessions are protected using authentication tokens.
            </p>

          </div>

        </div>

      </section>


      {/* =================================================
          DANGER ZONE
      ================================================= */}

      <section className="settings-section danger-section">

        <div className="settings-section-header">

          <div>

            <h2>
              Account Actions
            </h2>

            <p>
              Manage your current session.
            </p>

          </div>

        </div>


        <button
          type="button"
          className="logout-settings-button"
          onClick={handleLogout}
        >

          <LogOut size={18} />

          Logout

        </button>

      </section>

    </div>

  );
}

export default Settings;