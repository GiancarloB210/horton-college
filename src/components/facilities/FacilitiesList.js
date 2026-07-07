import { Link } from "react-router-dom";

function FacilitiesList() {
    return (
        <div>
            <h2>Facilities</h2>
            <ul>
                <li>
                    <Link to="/facilities/pool">"State-of-the-Art" Pool</Link>
                </li>
            </ul>
        </div>
    )
}

export default FacilitiesList;