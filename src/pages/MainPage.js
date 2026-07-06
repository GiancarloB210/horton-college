import Header from '../components/Header.js'
import Footer from '../components/Footer.js'
import { Link } from "react-router-dom";

function MainPage() {
  return (
    <div className="app-page">
      <Header />
      <section className="app-section">
        <p>Welcome to Horton College!</p>

        <h2>Visits</h2>
        <Link to="/visits/schedule_visit"> Schedule a Visit </Link>
        <Link to="/visits/display_visits"> View Scheduled Visits </Link>

        <h2>Registrars</h2>
        <Link to="/staff"> Staff Registrar </Link>
        <Link to="/alumni"> Star Alumni Registrar </Link>
        
        <h2>Miscellaneous</h2>
        <Link to="/about"> About Us </Link>
      </section>
      <Footer />
    </div>
  );
}

export default MainPage;
