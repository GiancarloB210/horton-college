import horton_college_logo from '../img/horton-college-logo.png'
import { Link } from "react-router-dom";

function Header() {
    return (
        <header>
            <Link to="/">
                <img src={horton_college_logo} className="logo" alt="Horton College Logo" />
            </Link>
        </header>
    )
}

export default Header