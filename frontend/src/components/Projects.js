function Projects() {

  const projects = [
    {
      title: "Bus Booking App",
      description: "MERN stack bus ticket booking application.",
      tech: "React, Node.js, MongoDB"
    },

    {
      title: "Portfolio Website",
      description: "Personal responsive portfolio website.",
      tech: "React.js"
    }
  ];

  return (
    <section id="projects" className="section">

      <h2>Projects</h2>

      <div className="project-container">

        {projects.map((project, index) => (

          <div className="project-card" key={index}>

            <h3>{project.title}</h3>

            <p>{project.description}</p>

            <h4>{project.tech}</h4>

          </div>

        ))}

      </div>

    </section>
  );
}

export default Projects;