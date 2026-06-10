import horton_college_logo from '../img/horton-college-logo.png'

function Header() {
    return (
        <div>
            <img src={horton_college_logo} className="logo" alt="logo" />
        </div>
    )
}

export default Header