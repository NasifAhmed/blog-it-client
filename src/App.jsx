import NavBar from "./components/NavBar";
import Footer from "./components/Footer";
import { Outlet } from "react-router-dom";
import { Helmet } from "react-helmet";
import { Toaster } from "react-hot-toast";
import ScrollToTop from "./components/ScrollToTop";

const App = () => {
    return (
        <div className="mx-5 md:mx-20 mt-5 md:mt-10 flex flex-col min-h-screen">
            <NavBar></NavBar>
            <ScrollToTop></ScrollToTop>
            <Outlet></Outlet>
            <Footer></Footer>
            <Helmet>
                <meta charSet="utf-8" />
                <title>Blog.it</title>
                {/* <link rel="canonical" href="http://mysite.com/example" /> */}
            </Helmet>
            <Toaster
                position="bottom-center"
                reverseOrder={true}
                containerStyle={{
                    bottom: 100,
                }}
            ></Toaster>
        </div>
    );
};

export default App;
