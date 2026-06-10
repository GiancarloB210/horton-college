import Header from '../../../components/Header.js'
import Footer from '../../../components/Footer.js'
import '../../../style/App.css';
import { Link } from "react-router-dom";

function AIGeneratedAnimeWoman() {
  return (
    <div className="app-page">
        <Header />
        <section class="app-section">
            <h1>AI-Generated Anime Woman</h1>
            <p>You'd think that just because somebody is AI-generated, they wouldn't be able to properly educate students on top-level artistry and artistic integrity...</p>
            <p>However, you'd be <i>wrong</i> in our case!</p>
            <p>(At least when it solely comes to her)</p>
            <p>((Please support real artists))</p>
            <Link to="../staff">Back to Staff Registrar</Link>
        </section>
        <Footer />
    </div>
  );
}

export default AIGeneratedAnimeWoman