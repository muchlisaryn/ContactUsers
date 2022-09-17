import { Link } from "react-router-dom";

export default function Navbar () {
    return (
        <div>
        <nav className="navbar navbar-expand-lg bg-light">
        <div className="container">
            <Link to="/" style={{textDecoration : "none"}}><div className="text-dark">User Contact</div></Link>

            <form className="d-flex" role="search">
                <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
                <button className="btn btn-outline-success" type="submit">Search</button>
            </form>
            
        </div>
        </nav>
     </div>
    )
}