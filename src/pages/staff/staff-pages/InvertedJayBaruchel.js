import Header from '../../../components/Header.js'
import Footer from '../../../components/Footer.js'
import inverted_jay_baruchel from '../../../img/staff/inverted_jay_baruchel.jpg'
import { Link, useNavigate } from "react-router-dom";

function InvertedJayBaruchel() {
  const navigate = useNavigate();
  let num_clicks = 0;

  function onImageClick() {
    if (num_clicks < 2) {
      num_clicks++;
      if (num_clicks === 1) {
        alert("Stop.");
      }
      if (num_clicks === 2) {
        alert("Stop now.");
      }
    } else {
      navigate('/unknown');
    }
  }

  return (
    <div className="app-page">
        <Header />
        <section class="app-section">
            <img src={inverted_jay_baruchel} onClick={onImageClick} class='site-image' alt="Inverted Jay Baruchel" />
            <h1>Inverted Jay Baruchel</h1>
            <p>An esteemed alumnus of Dawson College, Jay Baruchel went on from collegial graduation to make his memorable mark in the
            film industry and Hollywood as a whole...but THIS Jay Baruchel is <i>inverted</i>!</p>
            <p>Teaches 'Introduction to Film History', in which he has proven himself to be a phenomenal and beloved instructor over the years.</p>
            <p>Just don't be alarmed if he goes off-curriculum every now and then.</p>
            <p>Or uses movie torrenting websites to stream movies for the class to watch.</p>
            <p>...Or when he abruptly glances outside with <i>the look</i> on his face.</p>
            <br/>
            <Link to="/staff">Back to Staff Registrar</Link>
        </section>
        <Footer />
    </div>
  );
}

export default InvertedJayBaruchel