import PropTypes from 'prop-types';
import './Post.css'
import { Link, useNavigate } from 'react-router-dom';

const Post = ({post}) => {
    const {id, title} = post;
    // console.log(post)
const navigate = useNavigate();    

const handleShowDetail = () =>{
    navigate(`/post/${id}`);
}    

    return (
        <div className='Post'>
            <h4>Post of id: {id}</h4>
            <h2>Title1: {title} </h2>
            <Link to={`/post/${id}`}>Post Detial</Link>
            <Link to={`/post/${id}`}><button>Show Details</button></Link>
            <button onClick={handleShowDetail}>Click to see details</button>
        </div>
    );
};
Post.propTypes ={
    post: PropTypes.object
}
export default Post;