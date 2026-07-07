import Header from '../../components/Header.js'
import Footer from '../../components/Footer.js'
import FacilitiesList from '../../components/facilities/FacilitiesList.js'

function FacilitiesMainPage() {
    return (
        <div className="app-page">
            <Header />
            <section class="app-section">
                <FacilitiesList />
            </section>
            <Footer />
        </div>
    )
}

export default FacilitiesMainPage;