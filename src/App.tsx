

import './App.css';

function App() {
 

  return (
    <>
     <body>
      {/*<!--nav start-->*/}
      <nav id="navbar" className="nav">
        <ul className="nav-list">
          <li>
           <a href="#projects">Projects</a>
          </li>
          <li>
            <a href="#welcome-section">Home</a>
            </li>
          </ul>  
      </nav>
      {/*<!--nav end-->*/}
      {/*<!--welcome start-->*/}
      <section id="welcome-section" className="welcome-section">
        <h1>Caleb Martin</h1>
        <p>an aspiring developer</p>
        <div className="contacts-links">
    <a id="profile-link" className="btn contact-details" href="https://github.com/CMartin0-0" target="_blank" rel="noreferrer">
      <i className="fab fa-github">
      </i>
      Github
      </a>
      <a className="btn contact-details"
      href="calebmartin2020@gmail.com">
      <i className="fas fa-at">
      </i>
      Email
      </a>
        </div>
      </section>
      {/*<!--welcome end-->*/}
      {/*<!--projects start-->*/}
      <section id="projects" className="projects-section">
        <h2 className="projects-section-header">Projects</h2>
        <a href="https://codepen.io/Caleb-Martin/full/gOZJjBK" className="project-tile">
        <img className="project-image" src="https://shots.codepen.io/username/pen/gOZJjBK-800.jpg?version=1697428932" alt="project"></img>
        <p className="project-title">Tribute Page</p>
        </a>
        <a href="https://codepen.io/Caleb-Martin/full/dyrpLmr" className="project-tile">
       <img className="project-image" src="https://shots.codepen.io/username/pen/dyrpLmr-800.jpg?version=1705197082" alt="project"></img>
       <p className="project-title">Palindrome Checker</p>
        </a>
        <a href="https://codepen.io/Caleb-Martin/pen/gOERLmq" className="project-tile">
        <img className="project-image" src="https://shots.codepen.io/username/pen/gOERLmq-800.jpg?version=1705861333" alt="project"></img>
        <p className="project-title">Roman Numeral Converter</p>
        </a>
      </section>
      {/*<!--projects end-->*/}
    </body>
    </>
  );
}

export default App;
