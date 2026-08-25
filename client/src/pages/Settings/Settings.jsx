import {
  Settings as SettingsIcon,
  Lock,
  Bell,
  ShieldCheck,
  LogOut,
  ChevronRight,
} from "lucide-react";

import { useEffect, useState } from "react";

import "./Settings.css";


function Settings() {


  // =====================================================
  // THEME
  // =====================================================

  const [darkMode, setDarkMode] = useState(() => {

    return localStorage.getItem("theme") === "dark";

  });


  // =====================================================
  // APPLY SAVED THEME
  // =====================================================

  useEffect(() => {

    const savedTheme =
      localStorage.getItem("theme");

    if (savedTheme === "dark") {

      document.documentElement.classList.add("dark");

      setDarkMode(true);

    } else {

      document.documentElement.classList.remove("dark");

      setDarkMode(false);

    }

  }, []);


  // =====================================================
  // THEME TOGGLE
  // =====================================================

  const handleThemeToggle = () => {

    setDarkMode((previous) => {

      const newMode = !previous;


      if (newMode) {

        document.documentElement.classList.add("dark");

        localStorage.setItem(
          "theme",
          "dark"
        );

      } else {

        document.documentElement.classList.remove("dark");

        localStorage.setItem(
          "theme",
          "light"
        );

      }


      return newMode;

    });

  };


  // =====================================================
  // LOGOUT
  // =====================================================

  const handleLogout = () => {

    localStorage.removeItem("token");

    localStorage.removeItem("user");

    localStorage.removeItem("currentResumeId");

    localStorage.removeItem("resumeData");

    // IMPORTANT:
    // Do NOT remove theme.
    // Theme preference should remain saved.

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


  // =====================================================
  // RENDER
  // =====================================================

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
          APPEARANCE
      ================================================= */}

      <section className="settings-section">


        <div className="settings-section-header">

          <div>

            <h2>
              Appearance
            </h2>

            <p>
              Choose how ResumeCraft looks on your device.
            </p>

          </div>

        </div>



        <div className="settings-item settings-item-static">


          <div className="settings-item-left">


            <div className="settings-item-icon">

              {darkMode ? "🌙" : "☀️"}

            </div>


            <div>

              <h3>

                {darkMode
                  ? "Dark Mode"
                  : "Light Mode"}

              </h3>


              <p>

                {darkMode
                  ? "Dark theme is currently enabled."
                  : "Light theme is currently enabled."}

              </p>

            </div>


          </div>



          {/* THEME SWITCH */}

          <label className="settings-toggle">


            <input
              type="checkbox"
              checked={darkMode}
              onChange={handleThemeToggle}
            />


            <span className="settings-toggle-slider"></span>


          </label>


        </div>


      </section>



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