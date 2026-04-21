import { NavLink } from "react-router-dom";

export default function AppHeader() {

    return (
        <nav className="navbar navbar-expand navbar-light bg-light">
            <ul className="nav navbar-nav">
                <li className="nav-item">
                    <NavLink className="nav-link active" to="/" aria-current="page">
                        Home<span className="visually-hidden">(current)</span>
                    </NavLink>
                </li>

            </ul>
        </nav>

    )
}