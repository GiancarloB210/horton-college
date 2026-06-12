import Header from '../components/Header.js'
import Footer from '../components/Footer.js'
import { Link } from "react-router-dom";

function MainPage() {
  return (
    <div className="app-page">
      <Header />
      <section className="app-section">
        <p>
          Welcome to Horton College!
        </p>
        <Link to="/about"> About Us </Link>
        <Link to="/staff"> Staff Registrar </Link>
        <Link to="/schedule_visit"> Schedule a Visit </Link>
      </section>
      <Footer />
    </div>
  );
}

export default MainPage;
