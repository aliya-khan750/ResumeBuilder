import { useState } from "react";
import {
  Sparkles,
  FileText,
  Briefcase,
  FolderKanban,
  Target,
  Copy,
  Check,
} from "lucide-react";

import "./AIAssistant.css";

function AIAssistant() {
  const [selectedTool, setSelectedTool] = useState("summary");

  const [content, setContent] = useState("");

  const [result, setResult] = useState("");

  const [loading, setLoading] = useState(false);

  const [copied, setCopied] = useState(false);

  const [error, setError] = useState("");


  // =====================================================
  // AI TOOLS
  // =====================================================

  const tools = [
    {
      id: "summary",
      title: "Improve Summary",
      description:
        "Make your professional summary stronger.",
      icon: FileText,
    },

    {
      id: "experience",
      title: "Improve Experience",
      description:
        "Turn your experience into strong resume points.",
      icon: Briefcase,
    },

    {
      id: "project",
      title: "Project Description",
      description:
        "Create a professional project description.",
      icon: FolderKanban,
    },

    {
      id: "ats",
      title: "ATS Suggestions",
      description:
        "Get suggestions to improve ATS readability.",
      icon: Target,
    },
  ];


  // =====================================================
  // SELECT TOOL
  // =====================================================

  const handleToolSelect = (toolId) => {
    setSelectedTool(toolId);

    setContent("");

    setResult("");

    setError("");

    setCopied(false);
  };


  // =====================================================
  // GENERATE AI RESPONSE
  // =====================================================

  const handleGenerate = async () => {
    // Clear previous states
    setError("");

    setCopied(false);


    // =================================================
    // VALIDATION
    // =================================================

    if (!content.trim()) {
      setError("Please enter some resume content first.");
      return;
    }


    setLoading(true);

    setResult("");


    try {
      // =================================================
      // CALL BACKEND
      // =================================================

      const response = await fetch(
        "https://resumecraft-server-v3tm.onrender.com/api/ai/generate",
        {
          method: "POST",

          headers: {
            "Content-Type": "application/json",
          },

          body: JSON.stringify({
            tool: selectedTool,
            content: content.trim(),
          }),
        }
      );


      // =================================================
      // READ RESPONSE
      // =================================================

      const data = await response.json();


      // =================================================
      // HANDLE SERVER ERROR
      // =================================================

      if (!response.ok) {
        throw new Error(
          data.message ||
            "Unable to generate AI response."
        );
      }


      // =================================================
      // SET AI RESULT
      // =================================================

      setResult(data.result || "");


    } catch (error) {
      console.error(
        "AI Assistant error:",
        error
      );

      setError(
        error.message ||
          "Unable to connect to AI service. Please try again."
      );


    } finally {
      setLoading(false);
    }
  };


  // =====================================================
  // COPY RESULT
  // =====================================================

  const handleCopy = async () => {
    if (!result) return;


    try {
      await navigator.clipboard.writeText(result);

      setCopied(true);


      setTimeout(() => {
        setCopied(false);
      }, 2000);


    } catch (error) {
      console.error(
        "Copy error:",
        error
      );

      setError(
        "Unable to copy the result."
      );
    }
  };


  // =====================================================
  // RETURN
  // =====================================================

  return (
    <div className="ai-page">

      {/* =================================================
          HEADER
      ================================================= */}

      <div className="ai-header">

        <div className="ai-header-icon">
          <Sparkles size={25} />
        </div>


        <div>
          <h1>
            AI Assistant
          </h1>

          <p>
            Improve your resume with intelligent suggestions.
          </p>
        </div>

      </div>


      {/* =================================================
          TOOL CARDS
      ================================================= */}

      <div className="ai-tools">

        {tools.map((tool) => {
          const Icon = tool.icon;

          return (
            <button
              type="button"
              key={tool.id}
              className={
                `ai-tool-card ${
                  selectedTool === tool.id
                    ? "selected"
                    : ""
                }`
              }
              onClick={() =>
                handleToolSelect(tool.id)
              }
            >

              <div className="ai-tool-icon">
                <Icon size={20} />
              </div>


              <div className="ai-tool-content">

                <h3>
                  {tool.title}
                </h3>

                <p>
                  {tool.description}
                </p>

              </div>

            </button>
          );
        })}

      </div>


      {/* =================================================
          WORKSPACE
      ================================================= */}

      <div className="ai-workspace">


        {/* =================================================
            INPUT PANEL
        ================================================= */}

        <div className="ai-panel">

          <div className="ai-panel-header">

            <div>

              <h2>
                Your Content
              </h2>

              <p>
                Enter the content you want AI to improve.
              </p>

            </div>

          </div>


          {/* =================================================
              TEXTAREA
          ================================================= */}

          <textarea
            className="ai-textarea"
            placeholder="Paste your resume content here..."
            value={content}
            onChange={(e) => {
              setContent(e.target.value);
              setError("");
            }}
          />


          {/* =================================================
              ERROR
          ================================================= */}

          {error && (
            <div className="ai-error">
              {error}
            </div>
          )}


          {/* =================================================
              GENERATE BUTTON
          ================================================= */}

          <button
            type="button"
            className="ai-generate-button"
            onClick={handleGenerate}
            disabled={loading}
          >

            <Sparkles size={18} />

            {loading
              ? "Generating..."
              : "Generate"}

          </button>

        </div>


        {/* =================================================
            RESULT PANEL
        ================================================= */}

        <div className="ai-panel">

          <div className="ai-panel-header">

            <div>

              <h2>
                AI Result
              </h2>

              <p>
                Your improved resume content will appear here.
              </p>

            </div>


            {/* =================================================
                COPY BUTTON
            ================================================= */}

            {result && (
              <button
                type="button"
                className="copy-button"
                onClick={handleCopy}
              >

                {copied ? (
                  <>
                    <Check size={16} />
                    Copied
                  </>
                ) : (
                  <>
                    <Copy size={16} />
                    Copy
                  </>
                )}

              </button>
            )}

          </div>


          {/* =================================================
              RESULT
          ================================================= */}

          <div
            className={
              `ai-result ${
                result
                  ? "has-result"
                  : ""
              }`
            }
          >

            {result ? (

              <div className="ai-result-text">
                {result}
              </div>

            ) : (

              <div className="ai-empty">

                <Sparkles size={30} />

                <h3>
                  AI suggestions will appear here
                </h3>

                <p>
                  Enter your resume content and
                  click Generate.
                </p>

              </div>

            )}

          </div>

        </div>

      </div>

    </div>
  );
}

export default AIAssistant;