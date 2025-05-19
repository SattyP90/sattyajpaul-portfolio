

export default function Certificates() {
    const certificates = [
      {
        id: 1,
        name: "Software Engineering Job Simulation",
        issuer: "Goldman Sachs",
        date: "2024",
        logo: "https://via.placeholder.com/100",
      },
      {
        id: 2,
        name: "CSS",
        issuer: "HackerRank",
        date: "2024",
        logo: "https://via.placeholder.com/100",
      },
      {
        id: 3,
        name: "Python",
        issuer: "HackerRank",
        date: "2024",
        logo: "https://via.placeholder.com/100",
      },
    ]
  
    return (
      <section id="certificates" className="section">
        <div className="container">
          <h2 className="section-title">Certificates</h2>
          <div className="certificates-grid">
            {certificates.map((cert) => (
              <div className="certificate-card" key={cert.id}>
                <div className="certificate-logo">
                  <img src={cert.logo || "/placeholder.svg"} alt={cert.issuer} />
                </div>
                <div className="certificate-content">
                  <h3>{cert.name}</h3>
                  <p>
                    {cert.issuer} • {cert.date}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    )
  }
  