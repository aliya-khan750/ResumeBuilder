import {
  createContext,
  useContext,
  useEffect,
  useState,
} from "react";

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

  const [resumeData, setResumeData] = useState(
    initialResumeData
  );

  const [currentResumeId, setCurrentResumeId] =
    useState(null);

  const [loadingResume, setLoadingResume] =
    useState(false);


  /* ================= LOAD RESUME ================= */

  useEffect(() => {

    const loadResume = async () => {

      const params = new URLSearchParams(
        window.location.search
      );

      const resumeId = params.get("id");

      // ================= NEW RESUME =================

      if (!resumeId) {

        setCurrentResumeId(null);

        setResumeData(initialResumeData);

        localStorage.removeItem("resumeData");

        return;
      }


      // ================= EXISTING RESUME =================

      const token =
        localStorage.getItem("token");

      if (!token) {

        window.location.href = "/login";

        return;
      }


      setLoadingResume(true);


      try {

        const response = await fetch(
          `https://resumecraft-server-v3tm.onrender.com/api/resumes/${resumeId}`,
          {
            method: "GET",

            headers: {
              Authorization:
                `Bearer ${token}`,
            },
          }
        );


        const data =
          await response.json();


        if (!response.ok) {

          console.error(
            "Load resume error:",
            data.message
          );

          return;
        }


        // ================= SET RESUME ID =================

        setCurrentResumeId(
          data.resume._id
        );


        // ================= SET RESUME DATA =================

        setResumeData(
          data.resume.resumeData
        );


        // Also keep local copy
        localStorage.setItem(
          "resumeData",
          JSON.stringify(
            data.resume.resumeData
          )
        );


      } catch (error) {

        console.error(
          "Load resume error:",
          error
        );

      } finally {

        setLoadingResume(false);

      }

    };


    loadResume();

  }, []);


  /* ================= PERSONAL ================= */

  const updatePersonal = (
    field,
    value
  ) => {

    setResumeData((prev) => ({

      ...prev,

      personal: {
        ...prev.personal,
        [field]: value,
      },

    }));

  };


  /* ================= UPDATE SECTION ================= */

  const updateResumeData = (
    section,
    data
  ) => {

    setResumeData((prev) => ({

      ...prev,

      [section]: data,

    }));

  };


  /* ================= SET RESUME ID ================= */

  const setResumeId = (id) => {

    setCurrentResumeId(id);

  };


  /* ================= LOCAL SAVE ================= */

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

    setCurrentResumeId(null);

    setResumeData(
      initialResumeData
    );

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

        currentResumeId,

        setResumeId,

        loadingResume,

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