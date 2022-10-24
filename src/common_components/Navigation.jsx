import { Link } from "react-router-dom";

export const Navigation = ({ isLoggedIn }) => {
    return isLoggedIn ? (
        <nav id="page-header-nav">
            <Link to="/">Home</Link>
            <Link to="/create">Create</Link>
            <Link to="/search">Search</Link>
        </nav>
    ) : (
        <nav id="page-header-nav">
            <Link to="/register">Register</Link>
            <Link to="/login">Login</Link>
        </nav>
    )
}
    

