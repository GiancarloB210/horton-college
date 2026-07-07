import Header from '../../components/Header.js'
import Footer from '../../components/Footer.js'
import { Link } from "react-router-dom";

function VisitsDirectoryPage() {
  return (
    <div className="app-page">
      <Header />
      <section className="app-section">
        <h1>
          Visits Directory
        </h1>
        <Link to="./schedule_visit"> Schedule a Visit </Link>
        <Link to="./display_visits"> View Scheduled Visits </Link>
      </section>
      <Footer />
    </div>
  );
}

export default VisitsDirectoryPage;
