import { NavLink } from "react-router-dom";

export default function AppHeader() {

    return (
        <nav className="navbar d-flex justify-content-between align-items-center ">
            <div className="container-fluid">
                <NavLink to="/" className="text-decoration-none" id="nav-item">
                    Home
                </NavLink>
            </div>
        </nav>

    )
}