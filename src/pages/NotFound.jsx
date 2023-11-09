import React from "react";
import { Button } from "../components/ui/button";
import { useNavigate } from "react-router-dom";

const NotFound = () => {
    const navigate = useNavigate();
    return (
        <div className="grid md:grid-cols-2">
            <dev className="hidden md:flex md:flex-col justify-center items-center h-screen w-full text-center text-4xl font-semibold">
                <div>404</div>
                <h1>Not Found</h1>
            </dev>
            <dev className=" flex flex-col gap-10 justify-center items-center text-center text-4xl font-semibold h-screen w-full row-span-2">
                <div className="md:hidden">404</div>
                <div className="md:hidden">Not Found</div>
                <Button onClick={() => navigate(-1)}>Go Back</Button>
                <Button onClick={() => navigate("/")}>Go Home</Button>
            </dev>
        </div>
    );
};

export default NotFound;
