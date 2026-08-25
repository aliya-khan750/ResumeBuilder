import { useResume } from "../context/ResumeContext";

import {
  Menu,
  Sun,
  Moon,
  Bell,
  ChevronDown,
} from "lucide-react";

import { useState, useEffect } from "react";


function Navbar({ onMenuClick }) {

  const {
    resumeData,
    currentResumeId,
    setResumeId,
  } = useResume();


  // =====================================================
  // STATES
  // =====================================================

  const [saving, setSaving] = useState(false);

  const [saveMessage, setSaveMessage] = useState("");

  const [showNotifications, setShowNotifications] =
    useState(false);

  const [profileOpen, setProfileOpen] =
    useState(false);


  // =====================================================
  // GLOBAL DARK MODE
  // =====================================================

  const [darkMode, setDarkMode] = useState(() => {

    return localStorage.getItem("theme") === "dark";

  });


  // =====================================================
  // APPLY GLOBAL THEME
  // =====================================================

  useEffect(() => {

    const root =
      document.documentElement;

    if (darkMode) {

      root.classList.add("dark");

      localStorage.setItem(
        "theme",
        "dark"
      );

    } else {

      root.classList.remove("dark");

      localStorage.setItem(
        "theme",
        "light"
      );

    }

  }, [darkMode]);


  // =====================================================
  // THEME TOGGLE
  // =====================================================

  const handleThemeToggle = () => {

    setDarkMode(
      (previous) => !previous
    );

    // Close other dropdowns
    setShowNotifications(false);
    setProfileOpen(false);

  };


  // =====================================================
  // LOGGED-IN USER
  // =====================================================

  const user = (() => {

    try {

      return JSON.parse(
        localStorage.getItem("user") || "null"
      );

    } catch {

      return null;

    }

  })();


  // =====================================================
  // LOGOUT
  // =====================================================

  const handleLogout = () => {

    localStorage.removeItem("token");

    localStorage.removeItem("user");

    localStorage.removeItem(
      "currentResumeId"
    );

    localStorage.removeItem(
      "resumeData"
    );

    // Keep theme preference.
    // So if user logs in again,
    // selected theme can remain.

    window.location.href = "/login";

  };


  // =====================================================
  // PROFILE DROPDOWN
  // =====================================================

  const handleProfileClick = () => {

    setProfileOpen(
      (previous) => !previous
    );

    setShowNotifications(false);

  };


  // =====================================================
  // NOTIFICATIONS
  // =====================================================

  const handleNotificationClick = () => {

    setShowNotifications(
      (previous) => !previous
    );

    setProfileOpen(false);

  };


  // =====================================================
  // GO TO PROFILE
  // =====================================================

  const handleGoToProfile = () => {

    setProfileOpen(false);

    window.location.href =
      "/profile";

  };


  // =====================================================
  // GO TO SETTINGS
  // =====================================================

  const handleGoToSettings = () => {

    setProfileOpen(false);

    window.location.href =
      "/settings";

  };


  // =====================================================
  // SAVE RESUME
  // =====================================================

  const handleSave = async () => {

    const token =
      localStorage.getItem("token");


    // ===================================================
    // CHECK LOGIN
    // ===================================================

    if (!token) {

      alert(
        "Please login first."
      );

      window.location.href =
        "/login";

      return;

    }


    setSaving(true);

    setSaveMessage("");


    try {

      // =================================================
      // RESUME TITLE
      // =================================================

      const title =
        resumeData.personal?.fullName
          ? `${resumeData.personal.fullName}'s Resume`
          : "My Resume";


      // =================================================
      // API URL
      // =================================================

      let url =
        "https://resumecraft-server-v3tm.onrender.com/api/resumes";


      let method = "POST";


      // =================================================
      // EXISTING RESUME
      // =================================================

      if (currentResumeId) {

        url =
          `https://resumecraft-server-v3tm.onrender.com/api/resumes/${currentResumeId}`;

        method = "PUT";

      }


      // =================================================
      // API REQUEST
      // =================================================

      const response =
        await fetch(
          url,
          {
            method,

            headers: {

              "Content-Type":
                "application/json",

              Authorization:
                `Bearer ${token}`,

            },

            body:
              JSON.stringify({
                title,
                resumeData,
              }),

          }
        );


      // =================================================
      // RESPONSE
      // =================================================

      const data =
        await response.json();


      // =================================================
      // ERROR
      // =================================================

      if (!response.ok) {

        setSaveMessage(
          data.message ||
          "Failed to save resume."
        );

        return;

      }


      // =================================================
      // NEW RESUME ID
      // =================================================

      if (
        method === "POST" &&
        data.resume
      ) {

        setResumeId(
          data.resume._id
        );

      }


      // =================================================
      // SUCCESS
      // =================================================

      setSaveMessage(
        "Saved ✓"
      );


      setTimeout(() => {

        setSaveMessage("");

      }, 2000);


    } catch (error) {

      console.error(
        "Save resume error:",
        error
      );


      setSaveMessage(
        "Unable to connect to server."
      );


    } finally {

      setSaving(false);

    }

  };


  // =====================================================
  // USER INITIAL
  // =====================================================

  const userInitial =
    user?.name
      ? user.name
          .charAt(0)
          .toUpperCase()
      : "U";


  // =====================================================
  // RENDER
  // =====================================================

  return (

    <header className="navbar">


      {/* =================================================
          LEFT
      ================================================= */}

      <div className="navbar-left">


        {/* =================================================
            BRAND
        ================================================= */}

        <div className="brand">

          <div className="brand-mark">
            R
          </div>

          <span>
            ResumeCraft
          </span>

        </div>


        {/* =================================================
            MOBILE MENU
        ================================================= */}

        <button
          type="button"
          className="icon-button"
          aria-label="Open menu"
          title="Open menu"
          onClick={onMenuClick}
        >

          <Menu size={22} />

        </button>


      </div>


      {/* =================================================
          RIGHT
      ================================================= */}

      <div className="navbar-right">


        {/* =================================================
            THEME
        ================================================= */}

        <button
          type="button"
          className="icon-button"

          aria-label={
            darkMode
              ? "Switch to light mode"
              : "Switch to dark mode"
          }

          title={
            darkMode
              ? "Light Mode"
              : "Dark Mode"
          }

          onClick={handleThemeToggle}
        >

          {darkMode ? (

            <Sun size={20} />

          ) : (

            <Moon size={20} />

          )}

        </button>


        {/* =================================================
            NOTIFICATIONS
        ================================================= */}

        <div className="notification-wrapper">

          <button
            type="button"

            className="
              icon-button
              notification-button
            "

            aria-label="Notifications"

            title="Notifications"

            aria-expanded={
              showNotifications
            }

            onClick={
              handleNotificationClick
            }
          >

            <Bell size={20} />


            {/* Notification dot */}

            <span
              className="notification-dot"
            />

          </button>


          {/* =================================================
              NOTIFICATION DROPDOWN
          ================================================= */}

          {showNotifications && (

            <div
              className="notification-dropdown"
            >


              {/* HEADER */}

              <div
                className="notification-header"
              >

                <strong>
                  Notifications
                </strong>

                <span>
                  2
                </span>

              </div>


              {/* NOTIFICATION 1 */}

              <div
                className="notification-item"
              >

                <div
                  className="notification-icon"
                >
                  ✓
                </div>


                <div>

                  <strong>
                    Welcome to ResumeCraft
                  </strong>

                  <p>
                    Your resume builder is ready
                    to use.
                  </p>

                </div>

              </div>


              {/* NOTIFICATION 2 */}

              <div
                className="notification-item"
              >

                <div
                  className="notification-icon"
                >
                  📄
                </div>


                <div>

                  <strong>
                    Create your resume
                  </strong>

                  <p>
                    Start adding your
                    professional information.
                  </p>

                </div>

              </div>


              {/* FOOTER */}

              <div
                className="notification-empty"
              >

                You're all caught up 🎉

              </div>


            </div>

          )}

        </div>


        {/* =================================================
            SAVE
        ================================================= */}

        <button
          type="button"

          className="save-button"

          onClick={handleSave}

          disabled={saving}
        >

          {saving
            ? "Saving..."
            : "Save"}

        </button>


        {/* =================================================
            SAVE STATUS
        ================================================= */}

        {saveMessage && (

          <span
            className="save-message"
          >

            {saveMessage}

          </span>

        )}


        {/* =================================================
            PROFILE WRAPPER
        ================================================= */}

        <div
          className="profile-wrapper"
        >


          {/* =================================================
              PROFILE BUTTON
          ================================================= */}

          <button
            type="button"

            className="profile-button"

            onClick={
              handleProfileClick
            }

            aria-expanded={
              profileOpen
            }

            aria-label="Open profile menu"

            title="Profile menu"
          >

            <div
              className="profile-avatar"
            >

              {userInitial}

            </div>


            <span>

              {user?.name || "User"}

            </span>


            <ChevronDown
              size={17}

              className={
                profileOpen
                  ? "profile-arrow-open"
                  : ""
              }
            />

          </button>


          {/* =================================================
              PROFILE DROPDOWN
          ================================================= */}

          {profileOpen && (

            <div
              className="profile-dropdown"
            >


              {/* USER INFORMATION */}

              <div
                className="profile-dropdown-user"
              >

                <div
                  className="
                    profile-dropdown-avatar
                  "
                >

                  {userInitial}

                </div>


                <div>

                  <strong>

                    {user?.name ||
                      "User"}

                  </strong>


                  <span>

                    {user?.email ||
                      "Account"}

                  </span>

                </div>

              </div>


              {/* DIVIDER */}

              <div
                className="profile-divider"
              />


              {/* PROFILE */}

              <button
                type="button"

                className="
                  profile-dropdown-item
                "

                onClick={
                  handleGoToProfile
                }
              >

                <span
                  className="
                    dropdown-item-icon
                  "
                >
                  👤
                </span>

                <span>
                  Profile
                </span>

              </button>


              {/* SETTINGS */}

              <button
                type="button"

                className="
                  profile-dropdown-item
                "

                onClick={
                  handleGoToSettings
                }
              >

                <span
                  className="
                    dropdown-item-icon
                  "
                >
                  ⚙️
                </span>

                <span>
                  Settings
                </span>

              </button>


              {/* DIVIDER */}

              <div
                className="profile-divider"
              />


              {/* LOGOUT */}

              <button
                type="button"

                className="
                  profile-dropdown-item
                  logout-item
                "

                onClick={
                  handleLogout
                }
              >

                <span
                  className="
                    dropdown-item-icon
                  "
                >
                  🚪
                </span>

                <span>
                  Logout
                </span>

              </button>


            </div>

          )}

        </div>


      </div>


    </header>

  );

}


export default Navbar;