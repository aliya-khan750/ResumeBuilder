import { createContext, useContext, useState } from "react";

const ResumeContext = createContext();

/* ================= INITIAL RESUME DATA ================= */

const initialResumeData = {
  personal: {
    fullName: "",
    jobTitle: "",
    email: "",
    phone: "",
    location: "",
    linkedin: "",
    github: "",
    summary: "",
  },

  education: [],

  experience: [],

  projects: [],

  skills: {
    technicalSkills: "",
    toolsTechnologies: "",
    softSkills: "",
  },

  certifications: [],

  achievements: [],

  languages: [],

  references: [],

  customSections: [],
};


/* ================= RESUME PROVIDER ================= */

export function ResumeProvider({ children }) {

  const [resumeData, setResumeData] = useState(() => {

    const savedResume =
      localStorage.getItem("resumeData");

    if (savedResume) {

      try {

        return JSON.parse(savedResume);

      } catch (error) {

        console.error(
          "Error loading saved resume:",
          error
        );

        return initialResumeData;
      }

    }

    return initialResumeData;
  });


  /* ================= PERSONAL ================= */

  const updatePersonal = (field, value) => {

    setResumeData((prev) => ({

      ...prev,

      personal: {
        ...prev.personal,
        [field]: value,
      },

    }));

  };


  /* ================= RESUME DATA ================= */

  const updateResumeData = (section, data) => {

    setResumeData((prev) => ({

      ...prev,

      [section]: data,

    }));

  };


  /* ================= SAVE RESUME ================= */

  const saveResume = () => {

    localStorage.setItem(
      "resumeData",
      JSON.stringify(resumeData)
    );

  };


  /* ================= RESET ================= */

  const resetResume = () => {

    localStorage.removeItem(
      "resumeData"
    );

    setResumeData({
      personal: {
        fullName: "",
        jobTitle: "",
        email: "",
        phone: "",
        location: "",
        linkedin: "",
        github: "",
        summary: "",
      },

      education: [],

      experience: [],

      projects: [],

      skills: {
        technicalSkills: "",
        toolsTechnologies: "",
        softSkills: "",
      },

      certifications: [],

      achievements: [],

      languages: [],

      references: [],

      customSections: [],
    });

  };


  /* ================= PROVIDER ================= */

  return (

    <ResumeContext.Provider
      value={{

        resumeData,

        setResumeData,

        updatePersonal,

        updateResumeData,

        saveResume,

        resetResume,

      }}
    >

      {children}

    </ResumeContext.Provider>

  );

}


/* ================= USE RESUME ================= */

export function useResume() {

  const context =
    useContext(ResumeContext);

  if (!context) {

    throw new Error(
      "useResume must be used inside ResumeProvider"
    );

  }

  return context;

}