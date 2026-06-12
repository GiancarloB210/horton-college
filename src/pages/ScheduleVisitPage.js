import Header from '../components/Header.js'
import Footer from '../components/Footer.js'

function ScheduleVisitPage() {
    function display_visit_alert(form_data) {
        const full_name = form_data.get("full_name");
        const date = form_data.get("meeting_date");
        const time = form_data.get("meeting_time")
        const meeting_host = form_data.get("meeting_host");
        alert(`Good news, ${full_name}!\nYour visit is scheduled for ${date}, at ${time}, with ${meeting_host} as your host!`);
    }

    return (
        <div class="app-page">
            <Header />
            <div class="app-section">
                <h1>Schedule a Visit</h1>
                <form action={display_visit_alert}>
                    <div className="form-group">
                        <label htmlFor="nafull_nameme">Full Name:</label>
                        <input name="full_name" type="text" required />
                    </div>

                    <div className="form-group">
                        <label htmlFor="meeting_date">Meeting Date:</label>
                        <input name="meeting_date" type="date" required />
                    </div>

                    <div className="form-group">
                        <label htmlFor="meeting_time">Meeting Time:</label>
                        <input name="meeting_time" type="time" required />
                    </div>

                    <div className="form-group">
                        <label htmlFor="meeting_host">Meeting Host:</label>
                        <input name="meeting_host" type="text" required />
                    </div>

                    <button type="submit">Schedule Visit</button>
                </form>
            </div>
            <Footer />
        </div>
    )
}

export default ScheduleVisitPage;