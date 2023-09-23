import { useLoaderData, useNavigate, useParams } from "react-router-dom";

const PostDetails = () => {
    const post = useLoaderData();
    const {postId} = useParams()
    // console.log(post)
    const {id, title, body} = post;
    const navigate = useNavigate();
const handleGoBack = () => {
    navigate(-1);
}                                                                              
// console.log(postId)

    return (
        <div>
        <h3>Post Details about: {id}</h3>
            <p>Title: {title}</p>
            <p><small>{body}</small></p>
            <button onClick={handleGoBack}>Go back</button>
        </div>
    );
};

export default PostDetails;