import { Link } from "react-router-dom";

function StaffRegistrarList() {
    return (
        <div>
            <h2>Professors</h2>
            <ul>
                <li>
                    <Link to="/staff/inverted_jay_baruchel">Inverted Jay Baruchel</Link>
                </li>
                <li>
                    <Link to="/staff/ai_generated_anime_woman">AI-Generated Anime Woman</Link>
                </li>
            </ul>
            <h2>Additional Staff</h2>
            <ul>
                <li>
                    <Link to="/staff/jerrie">Jerrie</Link>
                </li>
            </ul>
        </div>
    )
}

export default StaffRegistrarList;