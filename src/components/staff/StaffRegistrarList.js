import '../../style/App.css';
import { Link } from "react-router-dom";

function StaffRegistrarList() {
    return (
        <div>
            <h2>Professors</h2>
            <ul>
                <li>
                    <Link to="./inverted_jay_baruchel">Inverted Jay Baruchel</Link>
                </li>
                <li>
                    <Link to="./ai_generated_anime_woman">AI-Generated Anime Woman</Link>
                </li>
            </ul>
            <h2>Additional Staff</h2>
            <ul>
                <li>
                    <Link to="./jerrie">Jerrie</Link>
                </li>
            </ul>
        </div>
    )
}

export default StaffRegistrarList;