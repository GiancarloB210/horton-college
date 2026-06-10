import horton_college_logo from './horton-college-logo.png'
import './App.css';

function App() {
  return (
    <html>
      <head>
        <title>Horton College</title>
      </head>
      <body>
        <div className="App">
          <header className="App-header">
            <img src={horton_college_logo} className="App-logo" alt="logo" />
            <p>
              Welcome to Horton College!
            </p>
            <a
              className="App-link"
              href="https://en.wikipedia.org/wiki/Parody"
              target="_blank"
              rel="noopener noreferrer"
            >
              What this website is intended to be
            </a>
          </header>
        </div>
      </body>
    </html>
  );
}

export default App;
