import NavBar from "./components/NavBar";
import Footer from "./components/Footer";
import { Outlet } from "react-router-dom";

const App = () => {
    return (
        <div className="mx-10 md:mx-20 mt-5 md:mt-10 flex flex-col min-h-screen">
            <NavBar></NavBar>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default App;
