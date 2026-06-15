function Skills() {

  const skills = [
    "HTML",
    "CSS",
    "JavaScript",
    "React.js",
    "Node.js",
    "Express.js",
    "MongoDB",
    "C++"
  ];

  return (
    <section id="skills" className="section">

      <h2>Skills</h2>

      <div className="skills-grid">

        {skills.map((skill, index) => (

          <div className="skill-card" key={index}>
            {skill}
          </div>

        ))}

      </div>

    </section>
  );
}

export default Skills;