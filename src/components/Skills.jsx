export default function Skills() {
    const technicalSkills = [
        "Python",
        "Java",
        "SQL",
        "PHP",
      "JavaScript",
      "React",
      "Node.js",
      "PostgreSQL",
      "HTML5",
      "CSS3",
      "Git",
    ]
  
    const softSkills = [
      "Problem Solving",
      "Team Collaboration",
      "Communication",
      "Project Management",
      "Time Management",
      "Adaptability",
      "Critical Thinking",
      "Leadership",
    ]
  
    return (
      <section id="skills" className="section">
        <div className="container">
          <h2 className="section-title">Skills</h2>
          <div className="skills-container">
            <div className="skills-column">
              <h3>Technical Skills</h3>
              <div className="skills-tags">
                {technicalSkills.map((skill, index) => (
                  <span className="skill-tag" key={index}>
                    {skill}
                  </span>
                ))}
              </div>
            </div>
            <div className="skills-column">
              <h3>Soft Skills</h3>
              <div className="skills-tags">
                {softSkills.map((skill, index) => (
                  <span className="skill-tag soft" key={index}>
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    )
  }
  