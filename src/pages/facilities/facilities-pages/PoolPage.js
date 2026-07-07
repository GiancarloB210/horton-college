import Header from '../../../components/Header.js'
import Footer from '../../../components/Footer.js'
import { useState } from 'react'
import { useNavigate } from "react-router-dom";

import pool from '../../../img/pool/pool.jpg'
import pool_deep from '../../../img/pool/pool_deep.jpg'
import pool_deeper from '../../../img/pool/pool_deeper.jpg'
import pool_deepening from '../../../img/pool/pool_deepening.jpg'
import pool_deepest from '../../../img/pool/pool_deepest.jpg'

function PoolPage() {
    const navigate = useNavigate()
    const [poolImage, setPoolImage] = useState(pool);

    function changeDepth() {
        if (poolImage === pool) {
            setPoolImage(pool_deep);
        }
        else if (poolImage === pool_deep) {
            setPoolImage(pool_deeper);
        }
        else if (poolImage === pool_deeper) {
            setPoolImage(pool_deepening);
        }
        else if (poolImage === pool_deepening) {
            setPoolImage(pool_deepest);
        } else {
            navigate("/unknown");
        }
    }

    return (
        <div className="app-page">
            <Header />
            <section className="app-section">
                <img src={poolImage} onClick={changeDepth} class='site-image' alt="Pool" />
                <p>Come swim in our state-of-the-art pool for however long and spanning however many laps you wish!</p>
                <p>...Okay, perhaps it's not <em>state-of-the-art</em>, but it's still quite nice!</p>
                <p>...Okay, maybe it's not exactly <em>nice</em> per most standards, but it's still inhabitable</p>
                <p>...Oh, come on, if it's really uninhabitable, would we be promoting it on our website?</p>
                <p>...Please swim in our pool. Not even the swim team wants to use it, and the closest external pool is an hour away!</p>
                <p>And <em>please</em> don't worry about how deep it goes! Just...don't look down.</p>
            </section> 
            <Footer />
        </div>
    );
}

export default PoolPage;