import Header from '../../../components/Header.js'
import Footer from '../../../components/Footer.js'
import baxter from '../../../img/alumni/baxter.jpeg'
import { Link } from "react-router-dom";

function Baxter() {
  let num_clicks = 0;

  function onBaxterClick() {
    if (num_clicks < 10) {
      num_clicks++;
    } else {
      alert("You're clicking Baxter so much that he's about to spoil!")
    }
  }

  return (
    <div className="app-page">
        <Header />
        <section class="app-section">
            <img src={baxter} onClick={onBaxterClick} class='site-image' alt="Baxter" />
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