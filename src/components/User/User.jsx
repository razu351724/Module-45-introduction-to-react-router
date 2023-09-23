import PropTypes from 'prop-types';
import { Link } from "react-router-dom";

const User = ({user}) => {
    const {id, name, email, username} = user;
    const userStyle = {
        border: '3px solid yellow',
        padding: '10px',
        borderRadius: '10px',
        
        }

    return (
        <div style={userStyle}>
            <h2>Name: {name}</h2>
            <h3>Username: {username}</h3>
            <p>Email: {email}</p>
            <Link to={`/user/${id}`}>Show Details</Link>
            <Link to={`/user/${id}`}><button>Click Me</button></Link>
            
        </div>
    );
};

User.propTypes = {
    user: PropTypes.array
}
export default User;