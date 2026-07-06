import { Link } from "react-router-dom";

function AlumniList() {
    return (
        <div>
            <h2>Star Alumni</h2>
            <ul>
                <li>
                    <Link to="/alumni/baxter">Baxter David Edwards</Link>
                </li>
            </ul>
        </div>
    )
}

export default AlumniList;