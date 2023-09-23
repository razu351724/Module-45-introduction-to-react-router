import { Outlet, useLocation, useNavigation } from "react-router-dom";
import Header from "../Header/Heade";
import './Home.css';
import Footer from "../Footer/Footer";


const Home = () => {

    const navigation = useNavigation();
    const location = useLocation();
    console.log(location)
    return (
        <div className="razu">
            <Header></Header>
            {
                navigation.state === "loading"?
                <p>Loding....</p>:
                <Outlet></Outlet>
            }
            {/* <h2>The is the home component</h2>*/}
             
            <Footer></Footer>
        </div>
    );
};

export default Home;