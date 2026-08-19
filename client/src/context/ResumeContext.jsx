import { createContext, useContext, useState } from "react";

const ResumeContext = createContext();

export function ResumeProvider({ children }) {
  const [resumeData, setResumeData] = useState({
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
      programmingLanguages: "",
      webDevelopment: "",
      databases: "",
      tools: "",
    },

    certifications: [],

    achievements: [],

    languages: [],

    references: [],

    customSections: [],
  });

  const updatePersonal = (field, value) => {
    setResumeData((prev) => ({
      ...prev,
      personal: {
        ...prev.personal,
        [field]: value,
      },
    }));
  };

  const updateResumeData = (section, data) => {
    setResumeData((prev) => ({
      ...prev,
      [section]: data,
    }));
  };

  const resetResume = () => {
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

      education: {
  degree: "",
  institution: "",
  startYear: "",
  endYear: "",
  location: "",
  grade: "",
},
      experience: [],
      projects: [],

      skills: {
        programmingLanguages: "",
        webDevelopment: "",
        databases: "",
        tools: "",
      },

      certifications: [],
      achievements: [],
      languages: [],
      references: [],
      customSections: [],
    });
  };

  return (
    <ResumeContext.Provider
      value={{
        resumeData,
        setResumeData,
        updatePersonal,
        updateResumeData,
        resetResume,
      }}
    >
      {children}
    </ResumeContext.Provider>
  );
}

export function useResume() {
  const context = useContext(ResumeContext);

  if (!context) {
    throw new Error("useResume must be used inside ResumeProvider");
  }

  return context;
}