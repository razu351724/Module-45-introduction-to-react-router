import { useLoaderData } from "react-router-dom";

const UserDetails = () => {
    const user = useLoaderData();
    const {name, address} = user;

    return (
        <div>
            <h2>Details about user: {name}</h2>
            <p>address: {address?.street}</p>
        </div>
    );
};

export default UserDetails;