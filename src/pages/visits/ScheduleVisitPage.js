import Header from '../../components/Header.js'
import Footer from '../../components/Footer.js'
import { useVisits } from '../../contexts/VisitsContext';
import Visit from '../../classes/Visit';
import { Link } from "react-router-dom";


function ScheduleVisitPage() {
    const { addVisit } = useVisits();

    function create_visit(form_data) {
        const full_name = form_data.get("full_name");
        const date = form_data.get("meeting_date");
        const time = form_data.get("meeting_time")
        const meeting_host = form_data.get("meeting_host");
        const newVisit = new Visit(full_name, date, time, meeting_host);
        addVisit(newVisit);
        alert(`Good news, ${full_name}!\nYour visit is scheduled for ${date}, at ${time}, with ${meeting_host} as your host!`);
    }

    return (
        <div className="app-page">
            <Header />
            <div className="app-section">
                <h1>Schedule a Visit</h1>
                <form action={create_visit}>
                    <div className="form-group">
                        <label htmlFor="full_name">Full Name:</label>
                        <input id="full_name" name="full_name" type="text" required />
                    </div>

                    <div className="form-group">
                        <label htmlFor="meeting_date">Meeting Date:</label>
                        <input id="meeting_date" name="meeting_date" type="date" required />
                    </div>

                    <div className="form-group">
                        <label htmlFor="meeting_time">Meeting Time:</label>
                        <input id="meeting_time" name="meeting_time" type="time" required />
                    </div>

                    <div className="form-group">
                        <label htmlFor="meeting_host">Meeting Host:</label>
                        <input id="meeting_host" name="meeting_host" type="text" required />
                    </div>

                    <button type="submit">Schedule Visit</button>
                </form>
                <div style={{marginTop: 20 + "px"}}>
                    <Link to='/visits/display_visits'>View Scheduled Visits</Link>
                </div>
            </div>
            <Footer />
        </div>
    )
}

export default ScheduleVisitPage;