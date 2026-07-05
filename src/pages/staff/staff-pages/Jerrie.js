import Header from '../../../components/Header.js'
import Footer from '../../../components/Footer.js'
import jerrie from '../../../img/staff/jerrie.jpg'
import { Link } from "react-router-dom";

function Jerrie() {
  return (
    <div className="app-page">
        <Header />
        <section class="app-section">
            <img src={jerrie} class='site-image' alt="Jerrie" />
            <h1>Jerrie</h1>
            <p>When we first encountered Jerrie, we thought they would get us shut down. What reputable organization could continue operating after a serious rat problem?</p>
            <p>Well, we decided to set a positive example in that regard. It wasn't a rat problem, it was a rat <i>solution.</i></p>
            <p>After long discussions, heartfelt conversations and countless OSHA bribes, we decided to welcome Jerrie onto our team as our resident college cafeteria superstar!</p>
            <p>Jerrie always aims to service college clients with a smile and the best reception possible. Their can-do attitude is what we here at Horton College are all about.</p>
            <p>You can also bribe him with a piece of cheese in exchange for $50 of cafeteria goods at no cost to you, but you didn't hear that from us!</p>
            <br/>
            <Link to="../staff">Back to Staff Registrar</Link>
        </section>
        <Footer />
    </div>
  );
}

export default Jerrie