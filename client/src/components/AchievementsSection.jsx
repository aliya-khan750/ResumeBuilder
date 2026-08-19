import { useResume } from "../context/ResumeContext";

function AchievementsSection() {
  const { resumeData, updateResumeData } = useResume();

  const achievements = resumeData.achievements || [];

  const addAchievement = () => {
    updateResumeData("achievements", [
      ...achievements,
      {
        title: "",
        description: "",
      },
    ]);
  };

  const updateAchievement = (index, field, value) => {
    const updated = achievements.map((item, i) =>
      i === index
        ? { ...item, [field]: value }
        : item
    );

    updateResumeData("achievements", updated);
  };

  const removeAchievement = (index) => {
    updateResumeData(
      "achievements",
      achievements.filter((_, i) => i !== index)
    );
  };

  return (
    <div className="editor-section">

      <div className="section-title">
        <div>
          <h3>Achievements</h3>
          <p>Highlight your awards and achievements.</p>
        </div>

        <span>⌃</span>
      </div>

      {achievements.map((item, index) => (
        <div key={index} className="project-entry">

          <div className="form-grid">

            <div className="form-group full-width">
              <label>Achievement Title</label>

              <input
                type="text"
                placeholder="e.g. Hackathon Winner"
                value={item.title}
                onChange={(e) =>
                  updateAchievement(
                    index,
                    "title",
                    e.target.value
                  )
                }
              />
            </div>

            <div className="form-group full-width">
              <label>Description</label>

              <textarea
                rows="4"
                placeholder="Describe your achievement..."
                value={item.description}
                onChange={(e) =>
                  updateAchievement(
                    index,
                    "description",
                    e.target.value
                  )
                }
              />
            </div>

          </div>

          <button
            type="button"
            className="add-button"
            onClick={() => removeAchievement(index)}
          >
            Remove Achievement
          </button>

        </div>
      ))}

      <button
        type="button"
        className="add-button"
        onClick={addAchievement}
      >
        + Add Achievement
      </button>

    </div>
  );
}

export default AchievementsSection;