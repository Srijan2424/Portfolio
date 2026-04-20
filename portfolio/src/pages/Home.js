import "./../App.css";

function Home() {
  return (
    <div className="container">
      
      <div className="hero">
        <div className="hero-text">
          <h1>Srijan Chopra</h1>
          <p>3rd Year B.Tech (AI) Student at Mahindra University</p>

          <button 
            className="btn"
            onClick={() => window.open("https://github.com/Srijan2424", "_blank")}
            >
            GitHub
            </button>
          <button 
            className="btn"
            onClick={() => window.open("https://www.linkedin.com/in/srijanchopra/", "_blank")}
            >
            LinkedIn
            </button>
        </div>

      </div>

      <h1>About Me</h1>
      <p>
        I am a 3rd year B.Tech AI student with experience in machine learning,
        software development, and data science.
      </p>

      <div className="card-container">
        
        <div className="card">
          <h2>Research Interests</h2>
          <ul>
            <li>Machine Learning</li>
            <li>NLP</li>
            <li>Deep Learning</li>
            <li>AI Systems</li>
          </ul>
        </div>

        <div className="card">
          <h2>Personal Details</h2>
          <p>Name: Srijan Chopra</p>
          <p>Email: srijan.chopra@gmail.com</p>
          <p>Skills: Python, ML, React, Flask, SQL</p>
        </div>

      </div>

    </div>
  );
}

export default Home;