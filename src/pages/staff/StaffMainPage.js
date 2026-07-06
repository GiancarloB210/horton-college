import Header from '../../components/Header.js'
import Footer from '../../components/Footer.js'
import StaffRegistrarList from '../../components/staff/StaffRegistrarList.js'

function StaffMainPage() {
    return (
        <div className="app-page">
            <Header />
            <section class="app-section">
                <h1>Staff</h1>
                <p>
                Here at Horton College, we strive to employ only the best (that we can find).
                </p>
                <StaffRegistrarList />
            </section>
            <Footer />
        </div>
    )
}

export default StaffMainPage