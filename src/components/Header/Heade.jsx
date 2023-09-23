import { Link, NavLink } from "react-router-dom";
import "./Heade.css"

const Heade = () => {
    return (
        <div className="css">
            <h2>Navbar</h2>
            <nav>
                <span>My Website</span>
                <Link className="space" to="/">Home</Link>
                <NavLink className="space" to="/users">Users</NavLink>
                {/* <Link className="space" to="/users">Users</Link> */}
                <Link className="space" to="/about">About</Link>
                <Link className="space" to="/contact">Contact Us</Link>
                {/* <Link className="space" to="/posts">Posts</Link> */}
                <NavLink className="space" to="/posts">Posts</NavLink>     
            </nav>
        </div>
    );
};

export default Heade;