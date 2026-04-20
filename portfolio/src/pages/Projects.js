function Projects() {
  return (
    <div className="container">
      <h1>My Projects</h1>

      <div className="card-container">

        <div className="card">
          <h3>Engine RUL Prediction</h3>
          <p>ML model to predict engine life using NASA dataset</p>
          <a href="https://github.com/Srijan2424/Predictive-Maintenance-for-Turbofan-Engines.git" target="_blank" rel="noreferrer">
            View Project
          </a>
        </div>

        <div className="card">
          <h3>Network Security</h3>
          <p>A ML model which tells the safety of a nwtwork. Made using modular encoding techniques.</p>
          <a href="https://github.com/Srijan2424/Network-Security.git" target="_blank" rel="noreferrer">
            View Project
          </a>
        </div>

      </div>
    </div>
  );
}

export default Projects;