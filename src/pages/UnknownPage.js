import Header from '../components/Header.js'
import Footer from '../components/Footer.js'

function UnknownPage() {
  return (
    <div className="app-page">
      <Header />
      <section className="app-section">
        <p>
            You are not supposed to be here.
        </p>
        <h1>
            LEAVE
        </h1>
      </section>
      <Footer />
    </div>
  );
}

export default UnknownPage;
