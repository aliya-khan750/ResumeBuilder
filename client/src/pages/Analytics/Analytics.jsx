import {
  BarChart3,
  FileText,
  Clock3,
  CheckCircle2,
  Sparkles,
  ArrowUpRight,
} from "lucide-react";

import "./Analytics.css";

function Analytics() {
  // =====================================================
  // TEMPORARY DATA
  // =====================================================
  // Backend connect hone ke baad ye real MongoDB data
  // se replace hoga.

  const stats = [
    {
      title: "Total Resumes",
      value: "0",
      description: "Resumes created",
      icon: FileText,
    },
    {
      title: "Recently Updated",
      value: "0",
      description: "Updated resumes",
      icon: Clock3,
    },
    {
      title: "Completion",
      value: "0%",
      description: "Average completion",
      icon: CheckCircle2,
    },
    {
      title: "AI Usage",
      value: "0",
      description: "AI improvements",
      icon: Sparkles,
    },
  ];

  return (
    <div className="analytics-page">

      {/* =================================================
          HEADER
      ================================================= */}

      <div className="analytics-header">

        <div className="analytics-header-left">

          <div className="analytics-header-icon">
            <BarChart3 size={26} />
          </div>

          <div>
            <h1>Analytics</h1>

            <p>
              Track your resume building activity and progress.
            </p>
          </div>

        </div>

      </div>


      {/* =================================================
          STAT CARDS
      ================================================= */}

      <div className="analytics-stats">

        {stats.map((stat) => {

          const Icon = stat.icon;

          return (
            <div
              className="analytics-stat-card"
              key={stat.title}
            >

              <div className="analytics-stat-top">

                <div className="analytics-stat-icon">
                  <Icon size={21} />
                </div>

                <ArrowUpRight
                  size={18}
                  className="analytics-arrow"
                />

              </div>


              <h2>
                {stat.value}
              </h2>

              <h3>
                {stat.title}
              </h3>

              <p>
                {stat.description}
              </p>

            </div>
          );

        })}

      </div>


      {/* =================================================
          MAIN ANALYTICS AREA
      ================================================= */}

      <div className="analytics-grid">


        {/* =================================================
            RESUME PROGRESS
        ================================================= */}

        <div className="analytics-card">

          <div className="analytics-card-header">

            <div>
              <h2>Resume Progress</h2>

              <p>
                Your average resume completion.
              </p>
            </div>

            <CheckCircle2 size={21} />

          </div>


          <div className="progress-wrapper">

            <div className="progress-circle">

              <span>0%</span>

            </div>

            <div className="progress-info">

              <h3>
                Keep building!
              </h3>

              <p>
                Complete your resume sections to
                improve your profile.
              </p>

            </div>

          </div>

        </div>


        {/* =================================================
            AI ACTIVITY
        ================================================= */}

        <div className="analytics-card">

          <div className="analytics-card-header">

            <div>
              <h2>AI Activity</h2>

              <p>
                Your AI Assistant usage.
              </p>
            </div>

            <Sparkles size={21} />

          </div>


          <div className="ai-activity-empty">

            <Sparkles size={30} />

            <h3>
              No AI activity yet
            </h3>

            <p>
              Use AI Assistant to improve your
              resume content.
            </p>

            <button
              type="button"
              onClick={() => {
                window.location.href =
                  "/ai-assistant";
              }}
            >
              Open AI Assistant
            </button>

          </div>

        </div>

      </div>


      {/* =================================================
          RECENT RESUMES
      ================================================= */}

      <div className="analytics-card recent-resumes">

        <div className="analytics-card-header">

          <div>
            <h2>Recent Resumes</h2>

            <p>
              Your recently updated resumes.
            </p>
          </div>

          <FileText size={21} />

        </div>


        <div className="analytics-empty">

          <FileText size={34} />

          <h3>
            No resumes yet
          </h3>

          <p>
            Create your first resume to see
            your activity here.
          </p>

          <button
            type="button"
            onClick={() => {
              window.location.href =
                "/builder";
            }}
          >
            Create Resume
          </button>

        </div>

      </div>

    </div>
  );
}

export default Analytics;