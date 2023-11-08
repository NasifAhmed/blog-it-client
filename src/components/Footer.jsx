import { Twitter, Facebook, Github } from "lucide-react";
import { useNavigate } from "react-router-dom";

const Footer = () => {
    const navigate = useNavigate();
    return (
        <div className="py-20 flex flex-col justify-end items-center">
            <h1 className="text-lg font-semibold">&copy; Nasif Ahmed</h1>
            <h1 className="text-bse font-medium">Made with fun and coffee</h1>
            <div className="flex gap-3 mt-5">
                <a
                    className="transform transition-transform hover:scale-105"
                    href="https://www.x.com/nasifthegeek"
                >
                    <Twitter></Twitter>
                </a>
                <a
                    className="transform transition-transform hover:scale-105"
                    href="https://www.facebook.com/nasif.ahmed1"
                >
                    <Facebook></Facebook>
                </a>
                <a
                    className="transform transition-transform hover:scale-105"
                    href="https://github.com/NasifAhmed"
                >
                    <Github></Github>
                </a>
            </div>
        </div>
    );
};

export default Footer;
