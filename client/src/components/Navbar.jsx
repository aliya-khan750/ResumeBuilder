import { useResume } from "../context/ResumeContext";

import {
  Menu,
  Sun,
  Bell,
  ChevronDown,
} from "lucide-react";

import { useState } from "react";

function Navbar() {
  const {
    resumeData,
    currentResumeId,
    setResumeId,
  } = useResume();

  const [saving, setSaving] = useState(false);
  const [saveMessage, setSaveMessage] = useState("");

  // ================= LOGGED-IN USER =================

  const user = JSON.parse(
    localStorage.getItem("user") || "null"
  );


  // ================= SAVE RESUME =================

  const handleSave = async () => {
    const token = localStorage.getItem("token");

    // Check login
    if (!token) {
      alert("Please login first.");
      window.location.href = "/login";
      return;
    }

    setSaving(true);
    setSaveMessage("");

    try {

      // ================= RESUME TITLE =================

      const title = resumeData.personal?.fullName
        ? `${resumeData.personal.fullName}'s Resume`
        : "My Resume";


      // ================= URL + METHOD =================

      let url = "https://resumecraft-server-v3tm.onrender.com/api/resumes";

      let method = "POST";


      // If existing resume
      if (currentResumeId) {

        url =
          `https://resumecraft-server-v3tm.onrender.com/api/resumes/${currentResumeId}`;

        method = "PUT";

      }


      // ================= API REQUEST =================

      const response = await fetch(
        url,
        {
          method,

          headers: {
            "Content-Type": "application/json",

            Authorization:
              `Bearer ${token}`,
          },

          body: JSON.stringify({
            title,

            resumeData,
          }),
        }
      );


      const data =
        await response.json();


      // ================= ERROR =================

      if (!response.ok) {

        setSaveMessage(
          data.message ||
          "Failed to save resume."
        );

        return;

      }


      // ================= NEW RESUME =================

      if (
        method === "POST" &&
        data.resume
      ) {

        setResumeId(
          data.resume._id
        );

      }


      // ================= SUCCESS =================

      setSaveMessage("Saved ✓");


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


  return (

    <header className="navbar">


      {/* ================= LEFT ================= */}

      <div className="navbar-left">

        <div className="brand">

          <div className="brand-mark">
            R
          </div>

          <span>
            ResumeCraft
          </span>

        </div>


        <button
          className="icon-button"
          aria-label="Open menu"
        >
          <Menu size={22} />
        </button>

      </div>



      {/* ================= RIGHT ================= */}

      <div className="navbar-right">


        {/* ================= THEME ================= */}

        <button
          className="icon-button"
          aria-label="Toggle theme"
        >
          <Sun size={20} />
        </button>



        {/* ================= NOTIFICATIONS ================= */}

        <button
          className="icon-button"
          aria-label="Notifications"
        >
          <Bell size={20} />
        </button>



        {/* ================= SAVE ================= */}

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



        {/* ================= SAVE STATUS ================= */}

        {saveMessage && (

          <span className="save-message">

            {saveMessage}

          </span>

        )}



        {/* ================= PROFILE ================= */}

        <button
          className="profile-button"
        >

          <div className="profile-avatar">

            {user?.name

              ? user.name
                  .charAt(0)
                  .toUpperCase()

              : "U"}

          </div>


          <span>

            {user?.name || "User"}

          </span>


          <ChevronDown size={17} />

        </button>


      </div>

    </header>

  );

}

export default Navbar;