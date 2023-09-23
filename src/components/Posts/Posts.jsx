import Post from "../Post/Post";
import { useLoaderData } from "react-router-dom";
import  "./Posts.css";

const Posts = () => {
    const posts = useLoaderData();
    // console.log(posts)
    return (
        <div>
            <h2>Posts:{posts.length}</h2>
            <div className="postsDiv">
                {
                    posts.map(postsx => <Post key={postsx.id} post={postsx}></Post>)
                }
            </div>
        </div>
    );
};

export default Posts;