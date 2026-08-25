import { useEffect, useState } from "react";

import {
  User,
  Mail,
  CalendarDays,
  ShieldCheck,
  Lock,
  LogOut,
  Save,
  Edit3,
  Settings,
  LayoutDashboard,
  ChevronLeft,
} from "lucide-react";

import "./Profile.css";


function Profile() {

  // =====================================================
  // USER DATA
  // =====================================================

  const [user, setUser] = useState(null);

  const [name, setName] = useState("");

  const [email, setEmail] = useState("");

  const [isEditing, setIsEditing] = useState(false);

  const [message, setMessage] = useState("");

  const [error, setError] = useState("");


  // =====================================================
  // LOAD USER
  // =====================================================

  useEffect(() => {

    try {

      const storedUser =
        localStorage.getItem("user");

      if (storedUser) {

        const parsedUser =
          JSON.parse(storedUser);

        setUser(parsedUser);

        setName(
          parsedUser.name || ""
        );

        setEmail(
          parsedUser.email || ""
        );

      }

    } catch (error) {

      console.error(
        "Unable to load user:",
        error
      );

      setError(
        "Unable to load profile information."
      );

    }

  }, []);


  // =====================================================
  // NAVIGATION
  // =====================================================

  const handleDashboard = () => {

    window.location.href =
      "/dashboard";

  };


  const handleSettings = () => {

    window.location.href =
      "/settings";

  };


  const handleBack = () => {

    window.history.back();

  };


  // =====================================================
  // SAVE PROFILE
  // =====================================================

  const handleSave = () => {

    setMessage("");

    setError("");


    if (!name.trim()) {

      setError(
        "Name cannot be empty."
      );

      return;

    }


    try {

      const updatedUser = {

        ...user,

        name: name.trim(),

        email,

      };


      localStorage.setItem(

        "user",

        JSON.stringify(updatedUser)

      );


      setUser(updatedUser);

      setIsEditing(false);

      setMessage(
        "Profile updated successfully."
      );


      setTimeout(() => {

        setMessage("");

      }, 3000);


    } catch (error) {

      console.error(
        "Profile update error:",
        error
      );

      setError(
        "Unable to update profile."
      );

    }

  };


  // =====================================================
  // CANCEL EDIT
  // =====================================================

  const handleCancel = () => {

    setName(
      user?.name || ""
    );

    setEmail(
      user?.email || ""
    );

    setIsEditing(false);

    setMessage("");

    setError("");

  };


  // =====================================================
  // CHANGE PASSWORD
  // =====================================================

  const handleChangePassword = () => {

    window.location.href =
      "/forgot-password";

  };


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

    /*
      IMPORTANT:
      theme is NOT removed.

      Therefore light/dark preference
      stays saved in localStorage.
    */

    window.location.href =
      "/login";

  };


  // =====================================================
  // GET INITIAL
  // =====================================================

  const getInitial = () => {

    if (!name.trim()) {

      return "U";

    }

    return name
      .trim()
      .charAt(0)
      .toUpperCase();

  };


  // =====================================================
  // ACCOUNT DATE
  // =====================================================

  const getAccountDate = () => {

    if (!user?.createdAt) {

      return "Account active";

    }


    try {

      return new Date(
        user.createdAt
      ).toLocaleDateString(
        "en-IN",
        {
          day: "numeric",
          month: "long",
          year: "numeric",
        }
      );

    } catch {

      return "Account active";

    }

  };


  // =====================================================
  // RETURN
  // =====================================================

  return (

    <div className="profile-page">


      {/* =================================================
          TOP NAVIGATION
      ================================================= */}

      <div className="profile-navigation">


        {/* BACK */}

        <button
          type="button"
          className="profile-nav-button"
          onClick={handleBack}
        >

          <ChevronLeft size={18} />

          Back

        </button>


        <div className="profile-nav-actions">


          {/* DASHBOARD */}

          <button
            type="button"
            className="profile-nav-button"
            onClick={handleDashboard}
          >

            <LayoutDashboard size={17} />

            Dashboard

          </button>


          {/* SETTINGS */}

          <button
            type="button"
            className="profile-nav-button"
            onClick={handleSettings}
          >

            <Settings size={17} />

            Settings

          </button>


        </div>

      </div>


      {/* =================================================
          HEADER
      ================================================= */}

      <div className="profile-header">

        <div className="profile-header-icon">

          <User size={25} />

        </div>


        <div>

          <h1>
            Profile
          </h1>

          <p>
            Manage your personal information and account.
          </p>

        </div>

      </div>


      {/* =================================================
          PROFILE CARD
      ================================================= */}

      <div className="profile-card">


        {/* =================================================
            PROFILE TOP
        ================================================= */}

        <div className="profile-top">


          {/* PROFILE AVATAR */}

          <div className="profile-page-avatar">

            {getInitial()}

          </div>


          {/* PROFILE INFO */}

          <div className="profile-top-info">

            <h2>
              {name || "User"}
            </h2>

            <p>
              {email || "No email available"}
            </p>

          </div>


          {/* EDIT BUTTON */}

          {!isEditing && (

            <button
              type="button"
              className="profile-edit-button"
              onClick={() => {

                setIsEditing(true);

                setMessage("");

                setError("");

              }}
            >

              <Edit3 size={16} />

              Edit Profile

            </button>

          )}

        </div>


        {/* =================================================
            SUCCESS MESSAGE
        ================================================= */}

        {message && (

          <div className="profile-success">

            {message}

          </div>

        )}


        {/* =================================================
            ERROR MESSAGE
        ================================================= */}

        {error && (

          <div className="profile-error">

            {error}

          </div>

        )}


        {/* =================================================
            PERSONAL INFORMATION
        ================================================= */}

        <div className="profile-section">


          <div className="profile-section-title">

            <h2>
              Personal Information
            </h2>

            <p>
              Your basic account information.
            </p>

          </div>


          {/* NAME */}

          <div className="profile-field">

            <label htmlFor="profile-name">

              <User size={16} />

              Full Name

            </label>


            <input
              id="profile-name"
              type="text"
              value={name}
              disabled={!isEditing}
              onChange={(e) =>
                setName(e.target.value)
              }
              placeholder="Enter your name"
            />

          </div>


          {/* EMAIL */}

          <div className="profile-field">

            <label htmlFor="profile-email">

              <Mail size={16} />

              Email Address

            </label>


            <input
              id="profile-email"
              type="email"
              value={email}
              disabled
              placeholder="Enter your email"
            />


            <small>
              Email address cannot be changed here.
            </small>

          </div>


          {/* EDIT ACTIONS */}

          {isEditing && (

            <div className="profile-actions">


              {/* CANCEL */}

              <button
                type="button"
                className="profile-cancel-button"
                onClick={handleCancel}
              >

                Cancel

              </button>


              {/* SAVE */}

              <button
                type="button"
                className="profile-save-button"
                onClick={handleSave}
              >

                <Save size={16} />

                Save Changes

              </button>


            </div>

          )}

        </div>


        {/* =================================================
            ACCOUNT INFORMATION
        ================================================= */}

        <div className="profile-section">


          <div className="profile-section-title">

            <h2>
              Account Information
            </h2>

            <p>
              Information about your ResumeCraft account.
            </p>

          </div>


          <div className="profile-info-grid">


            {/* ACCOUNT STATUS */}

            <div className="profile-info-item">

              <div className="profile-info-icon">

                <ShieldCheck size={18} />

              </div>


              <div>

                <span>
                  Account Status
                </span>

                <strong>
                  Active
                </strong>

              </div>

            </div>


            {/* ACCOUNT CREATED */}

            <div className="profile-info-item">

              <div className="profile-info-icon">

                <CalendarDays size={18} />

              </div>


              <div>

                <span>
                  Member Since
                </span>

                <strong>
                  {getAccountDate()}
                </strong>

              </div>

            </div>

          </div>

        </div>


        {/* =================================================
            SECURITY
        ================================================= */}

        <div className="profile-section">


          <div className="profile-section-title">

            <h2>
              Security
            </h2>

            <p>
              Manage your account password.
            </p>

          </div>


          <button
            type="button"
            className="profile-security-button"
            onClick={handleChangePassword}
          >

            <div className="profile-security-left">


              <div className="profile-info-icon">

                <Lock size={18} />

              </div>


              <div>

                <strong>
                  Change Password
                </strong>

                <span>
                  Reset your password using email verification.
                </span>

              </div>

            </div>


            <span className="profile-security-arrow">
              →
            </span>

          </button>

        </div>


        {/* =================================================
            LOGOUT
        ================================================= */}

        <div className="profile-logout-section">

          <button
            type="button"
            className="profile-logout-button"
            onClick={handleLogout}
          >

            <LogOut size={17} />

            Logout

          </button>

        </div>


      </div>

    </div>

  );

}


export default Profile;