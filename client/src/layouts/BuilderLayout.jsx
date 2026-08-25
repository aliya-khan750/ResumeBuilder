import { useState } from "react";

import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";
import EditorPanel from "../components/EditorPanel";
import ResumePreview from "../components/ResumePreview";


function BuilderLayout() {

  const [sidebarOpen, setSidebarOpen] = useState(false);


  // =====================================================
  // TOGGLE MOBILE SIDEBAR
  // =====================================================

  const toggleSidebar = () => {

    setSidebarOpen((previous) => !previous);

  };


  // =====================================================
  // CLOSE SIDEBAR
  // =====================================================

  const closeSidebar = () => {

    setSidebarOpen(false);

  };


  return (

    <div className="builder-app">


      {/* =================================================
          NAVBAR
      ================================================= */}

      <Navbar
        onMenuClick={toggleSidebar}
      />


      {/* =================================================
          BUILDER BODY
      ================================================= */}

      <div className="builder-body">


        {/* =================================================
            SIDEBAR
        ================================================= */}

        <Sidebar
          isOpen={sidebarOpen}
          onClose={closeSidebar}
        />


        {/* =================================================
            MAIN
        ================================================= */}

        <main className="builder-main">


          <div className="builder-workspace">


            {/* =================================================
                EDITOR
            ================================================= */}

            <div className="builder-editor">

              <EditorPanel />

            </div>


            {/* =================================================
                RESUME PREVIEW
            ================================================= */}

            <div className="builder-preview">


              <div className="preview-heading">

                <h2>
                  Resume Preview
                </h2>

                <p>
                  Live Preview
                </p>

              </div>


              <div className="preview-content">

                <ResumePreview />

              </div>


            </div>


          </div>


        </main>


      </div>


    </div>

  );

}


export default BuilderLayout;