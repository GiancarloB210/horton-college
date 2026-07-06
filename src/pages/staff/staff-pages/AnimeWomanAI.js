import Header from '../../../components/Header.js'
import Footer from '../../../components/Footer.js'
import ai_generated_anime_woman from '../../../img/staff/ai_generated_anime_woman.jpg'
import { Link } from "react-router-dom";

function AIGeneratedAnimeWoman() {
  return (
    <div className="app-page">
        <Header />
        <section class="app-section">
            <img src={ai_generated_anime_woman} class='site-image' alt="AI-Generated Anime Woman" />
            <h1>AI-Generated Anime Woman</h1>
            <p>You'd think that just because somebody is AI-generated, they wouldn't be able to properly educate students on top-level artistry and artistic integrity...</p>
            <p>However, you'd be <i>wrong</i> in our case!</p>
            <p>(At least when it solely comes to her)</p>
            <p>((Please support real artists))</p>
            <Link to="/staff">Back to Staff Registrar</Link>
        </section>
        <Footer />
    </div>
  );
}

export default AIGeneratedAnimeWoman