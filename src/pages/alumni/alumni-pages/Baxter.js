import Header from '../../../components/Header.js'
import Footer from '../../../components/Footer.js'
import baxter from '../../../img/alumni/baxter.jpeg'
import baxter_shiny from '../../../img/alumni/baxter_shiny.jpeg'
import { useState, useEffect } from 'react'
import { Link } from "react-router-dom";

function Baxter() {
  const [isShiny, setIsShiny] = useState(false);

  useEffect(() => {
    determineShiny();
  }, []);

  function determineShiny() {
    if ((Math.floor(Math.random() * 100) + 1) > 99) {
      setIsShiny(true)
    }
  }

  return (
    <div className="app-page">
        <Header />
        <section class="app-section">
            <img src={isShiny ? baxter_shiny : baxter} onClick={determineShiny} class='site-image' alt="Baxter" />
            <h1>Baxter David Edwards</h1>
            <p>Believe it or not, he graduated at the top of his class and with more honours than any alumnus before him.</p>
            <p>Talk about some top percent milk!</p>
            <p>...We'll see ourselves out.</p>
            <br/>
            <Link to="../alumni">Back to Star Alumni List</Link>
        </section>
        <Footer />
    </div>
  );
}

export default Baxter