import '../../style/App.css';
import Header from '../../components/Header.js'
import Footer from '../../components/Footer.js'
import { Link } from "react-router-dom";

function StaffMainPage() {
    return (
        <div className="app-page">
            <Header />
            <section class="app-section">
                <p>
                Here at Horton College, we strive to employ only the best (that we can find).<br/>
                Below, you can find a list of our beloved staff.
                </p>
                <ul>
                    <li>
                        <Link to="./jerrie">Jerrie</Link>
                    </li>
                </ul>
            </section>
            <Footer />
        </div>
    )
}

export default StaffMainPage