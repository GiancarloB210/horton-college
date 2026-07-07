import Header from '../../../components/Header.js'
import Footer from '../../../components/Footer.js'
import santiago from '../../../img/alumni/santiago.jpg'
import godfather_theme from '../../../audio/godfather-theme.mp3'; 
import { useEffect, useRef }from 'react';
import { Link } from "react-router-dom";

function Santiago() {
  const audioRef = useRef(new Audio(godfather_theme));

  function toggleAudio() {
    const audio = audioRef.current;
    if (audio.paused) {
      audio.play().catch(error => alert("Audio playback failed:", error));
    } else {
      audio.pause();
    }
  }

  useEffect(() => {
    return () => {
      const audio = audioRef.current;
      audio.pause();
      audio.currentTime = 0;
    };
  }, []);


  return (
    <div className="app-page">
        <Header />
        <section className="app-section">
            <img src={santiago} onClick={toggleAudio} className='site-image' alt="Baxter" />
            <h1>Santiago Bernuscoli</h1>
            <p>
              Santiago enrolled in Horton College when he was 73 years old.<br />
              He wanted to finally pursue postsecondary education after over 50 years of working in the family business.
            </p>
            <p>Today, Santiago is our oldest alumnus and one of our most distinguished, having graduated with the following:</p>
            <ul>
              <li>2 Dean's List placements in 2 separate academic years.</li>
              <li>7 top course performances.</li>
              <li>10 letters of recommendation written by professors who were thoroughly impressed with his work.</li>
              <li>The esteemed title of "2024 Graduating Class Valedictorian".</li>
              <li>A 20-year sentence for an intricate money laundering operation in which Horton College was one of the primary recipients of funds.</li>
            </ul>
            <p>(Note: The employee who wrote the last bullet point has been terminated as of the time of this page's most recent update)</p>
            <br/>
            <Link to="/alumni">Back to Star Alumni Registrar</Link>
        </section>
        <Footer />
    </div>
  );
}

export default Santiago