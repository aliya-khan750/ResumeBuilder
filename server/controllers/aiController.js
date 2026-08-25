const { GoogleGenAI } = require("@google/genai");

// =====================================================
// GEMINI CLIENT
// =====================================================

const ai = new GoogleGenAI({
  apiKey: process.env.GEMINI_API_KEY,
});


// =====================================================
// GENERATE AI RESPONSE
// =====================================================

const generateAIResponse = async (req, res) => {
  try {
    const { tool, content } = req.body;

    // =================================================
    // VALIDATION
    // =================================================

    if (!tool) {
      return res.status(400).json({
        message: "AI tool is required.",
      });
    }

    if (!content || !content.trim()) {
      return res.status(400).json({
        message: "Content is required.",
      });
    }


    // =================================================
    // PROMPT
    // =================================================

    let prompt = "";


    // =================================================
    // IMPROVE SUMMARY
    // =================================================

    if (tool === "summary") {
      prompt = `
You are a professional resume writer.

Improve the following professional summary.

Requirements:
- Make it professional and concise.
- Use strong action-oriented language.
- Make it ATS-friendly.
- Do not invent experience, skills, education, or achievements.
- Keep the meaning of the original content.
- Return only the improved summary.

Original content:

${content}
`;
    }


    // =================================================
    // IMPROVE EXPERIENCE
    // =================================================

    else if (tool === "experience") {
      prompt = `
You are an expert resume writer.

Rewrite the following work experience into strong,
professional, ATS-friendly resume bullet points.

Requirements:
- Use action verbs.
- Make each bullet concise.
- Focus on responsibilities, contributions, and impact.
- Do not invent facts or numbers.
- Do not add technologies that are not mentioned.
- Return 3 to 5 bullet points.
- Return only the bullet points.

Original experience:

${content}
`;
    }


    // =================================================
    // PROJECT DESCRIPTION
    // =================================================

    else if (tool === "project") {
      prompt = `
You are an expert technical resume writer.

Create a professional project description from the
following information.

Requirements:
- Make it ATS-friendly.
- Clearly explain what was built.
- Mention technologies only if provided.
- Highlight important functionality.
- Use strong action verbs.
- Do not invent features.
- Keep it concise.
- Return 2 to 4 resume bullet points.

Project information:

${content}
`;
    }


    // =================================================
    // ATS SUGGESTIONS
    // =================================================

    else if (tool === "ats") {
      prompt = `
You are an ATS resume expert.

Analyze the following resume content and provide
specific suggestions to improve its ATS compatibility.

Check:
- Keywords
- Section clarity
- Action verbs
- Readability
- Relevance
- Weak wording
- Missing measurable impact
- Formatting-related issues

Do not invent information.

Return clear and practical suggestions.

Resume content:

${content}
`;
    }


    // =================================================
    // INVALID TOOL
    // =================================================

    else {
      return res.status(400).json({
        message: "Invalid AI tool.",
      });
    }


    // =================================================
    // GEMINI REQUEST
    // =================================================

    const response = await ai.models.generateContent({
      model: "gemini-3.5-flash",

      contents: prompt,

      config: {
        temperature: 0.7,
        maxOutputTokens: 800,
      },
    });


    // =================================================
    // RESPONSE TEXT
    // =================================================

    const generatedText = response.text;


    if (!generatedText) {
      return res.status(500).json({
        message: "AI did not return a response.",
      });
    }


    // =================================================
    // SUCCESS
    // =================================================

    res.status(200).json({
      message: "AI response generated successfully.",
      result: generatedText,
    });


  } catch (error) {

    console.error(
      "AI generation error:",
      error
    );


    res.status(500).json({
      message:
        "Unable to generate AI response. Please try again.",
    });
  }
};


// =====================================================
// EXPORT
// =====================================================

module.exports = {
  generateAIResponse,
};