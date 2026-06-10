import Header from '../components/Header.js'
import '../style/App.css';

function MainPage() {
  return (
    <div className="App">
      <header className="App-header">
        <Header />
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
  );
}

export default MainPage;
