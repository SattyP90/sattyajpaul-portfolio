export default function Education() {
    const education = [
      {
        id: 1,
        degree: "BSc (Hons) Software Engineering",
        institution: "University of Kent",
        period: "2023 - Present (2026)",
        description: "Currently pursuing a degree in Software Engineering. Engaged in various projects and coursework related to software development, algorithms, and data structures.",
      },
      {
        id: 2,
        degree: "A-Levels",
        institution: "Holcombe Grammar School",
        period: "2021 - 2023",
        description: "Completed A-Levels in Computer Science, Mathematics, and Physics. Developed a strong foundation in programming, algorithms, and problem-solving.",
      },
      {
        id: 3,
        degree: "GCSEs",
        institution: "Holcombe Grammar School",
        period: "2016 - 2021",
        description: "Achieved 9 GCSEs including Mathematics, English, and Sciences. Developed a keen interest in technology and programming during this period.",
      },
    ]
  
    return (
      <section id="education" className="section">
        <div className="container">
          <h2 className="section-title">Education</h2>
          <div className="education-timeline">
            {education.map((edu) => (
              <div className="education-card" key={edu.id}>
                <div className="education-date">{edu.period}</div>
                <div className="education-content">
                  <h3>{edu.degree}</h3>
                  <h4>{edu.institution}</h4>
                  <p>{edu.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    )
  }
  