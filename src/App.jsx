import NavBar from "./components/NavBar";
import Footer from "./components/Footer";
import { Outlet } from "react-router-dom";
import { Flowbite } from "flowbite-react";

const customTheme = {
    button: {
        color: {
            primary: "bg-primary",
        },
    },
};

const App = () => {
    return (
        <Flowbite theme={customTheme}>
            <div className=" bg-background text-text">
                <NavBar></NavBar>
                <Outlet></Outlet>
                <Footer></Footer>
            </div>
        </Flowbite>
    );
};

export default App;
