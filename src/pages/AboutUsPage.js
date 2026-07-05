import Header from '../components/Header.js'
import Footer from '../components/Footer.js'
import { Link } from "react-router-dom";

function AboutUsPage() {
    return (
        <div className="app-page">
            <Header />
            <section className="app-section">
                <p>
                    Horton College was founded some time following the discovery of penicillin and some time before the launch of ChatGPT. <br />
                    Nobody knows exactly when it was founded. Funnily enough, nobody knows why nobody knows that!
                </p>
                <p>
                    We have a number of facilities and offerings (not reputable, just...offered), including:
                </p>
                <ul>
                    <li>A swimming pool which is one FILTHtration day away from being declared a national health and safety hazard!</li>
                    <li>A renowned (don't ask who we asked to say this) art gallery which we may or may not have bribed some local preschoolers to submit art to!</li>
                    <li>A cafeteria offering food.</li>
                    <li>IGNORE THE RAT IN THE CAFETERIA! Their name is <Link to='../staff/jerrie'>Jerrie</Link> and they're working to put their rat family through college!</li>
                    <li>Not <i>our</i> college, but still.</li>
                </ul>
                <p>
                    Apply today! Or tomorrow! Or whenever our admissions guy gets back from his tri-weekly vacation!<br />
                    You can even <Link to='../schedule_visit'>schedule a visit</Link> to see what our campus has to offer!
                </p>
            </section>
            <Footer />
        </div>
    )
}

export default AboutUsPage;