import "./Templates.css";

function Templates() {

  const templates = [
    {
      id: "classic",
      name: "Classic",
      description: "Clean and ATS-friendly professional resume.",
      type: "ATS Friendly",
    },
    {
      id: "modern",
      name: "Modern",
      description: "A modern layout for tech and creative professionals.",
      type: "Modern",
    },
    {
      id: "minimal",
      name: "Minimal",
      description: "Simple, elegant and distraction-free resume.",
      type: "Minimal",
    },
  ];


  const handleUseTemplate = (templateId) => {

    // Save selected template
    localStorage.setItem(
      "selectedTemplate",
      templateId
    );

    // Open builder
    window.location.href = "/builder";
  };


  return (
    <div className="templates-page">

      {/* ================= NAVBAR ================= */}

      <nav className="templates-navbar">

        <div
          className="templates-logo"
          onClick={() => {
            window.location.href = "/dashboard";
          }}
        >

          <div className="templates-logo-icon">
            R
          </div>

          <span>
            ResumeCraft
          </span>

        </div>


        <button
          className="templates-back-button"
          onClick={() => {
            window.location.href = "/dashboard";
          }}
        >
          ← Dashboard
        </button>

      </nav>


      {/* ================= MAIN ================= */}

      <main className="templates-main">

        <div className="templates-heading">

          <span className="templates-badge">
            ✦ Resume Templates
          </span>

          <h1>
            Choose your template
          </h1>

          <p>
            Select a professional template and
            start building your resume.
          </p>

        </div>


        {/* ================= TEMPLATE GRID ================= */}

        <div className="templates-grid">

          {templates.map((template) => (

            <div
              className="template-card"
              key={template.id}
            >

              {/* ================= PREVIEW ================= */}

              <div className="template-preview">

                <div className="mini-resume">

                  <div className="mini-header">
                    <div className="mini-name">
                      YOUR NAME
                    </div>

                    <div className="mini-job">
                      SOFTWARE ENGINEER
                    </div>
                  </div>


                  <div className="mini-section">
                    <span></span>
                    <span></span>
                    <span></span>
                  </div>


                  <div className="mini-section">
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                  </div>


                  <div className="mini-section">
                    <span></span>
                    <span></span>
                    <span></span>
                  </div>

                </div>

              </div>


              {/* ================= INFO ================= */}

              <div className="template-info">

                <div className="template-title-row">

                  <h2>
                    {template.name}
                  </h2>

                  <span className="template-type">
                    {template.type}
                  </span>

                </div>


                <p>
                  {template.description}
                </p>


                <button
                  className="use-template-button"
                  onClick={() =>
                    handleUseTemplate(
                      template.id
                    )
                  }
                >
                  Use Template →
                </button>

              </div>

            </div>

          ))}

        </div>

      </main>

    </div>
  );
}

export default Templates;