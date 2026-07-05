import Header from '../../components/Header.js'
import Footer from '../../components/Footer.js'
import AlumniList from '../../components/alumni/AlumniList.js'

function AlumniMainPage() {
    return (
        <div className="app-page">
            <Header />
            <section class="app-section">
                <AlumniList />
            </section>
            <Footer />
        </div>
    )
}

export default AlumniMainPage