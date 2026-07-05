import Header from '../../components/Header.js'
import Footer from '../../components/Footer.js'
import { useVisits } from '../../contexts/VisitsContext';
import { Link } from "react-router-dom";


function DisplayVisitsPage() {
    const { visits, deleteVisit } = useVisits();

    return (
        <div className="app-page">
            <Header />
            <div className="app-section">
                <h1>Scheduled Visits</h1>
                {visits.length === 0 ? (
                    <p className="no-visits">No visits have been scheduled yet.</p>
                ) : (
                    // 3. Loop through your Visit objects and display them
                    <ul className="visits-list">
                        {visits.map((visit, index) => (
                            <li key={index}>
                                {visit.toString()}
                                <button 
                                    className="delete-btn" 
                                    onClick={() => deleteVisit(index)}
                                >
                                    Delete
                                </button>
                            </li>
                        ))}
                    </ul>
                )}
            <Link to='..//visits/schedule_visit'>Schedule a Visit</Link>
            </div>
            <Footer />
        </div>
    );
}

export default DisplayVisitsPage;