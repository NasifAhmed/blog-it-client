import React from "react";

const NotFound = () => {
    return (
        <div className="grid md:grid-cols-2">
            <dev className="hidden md:flex justify-center items-center h-screen w-full text-center text-4xl font-semibold">
                <div>404</div>
            </dev>
            <dev className=" flex flex-col justify-center items-center text-center text-4xl font-semibold h-screen w-full row-span-2">
                <div className="md:hidden">404</div>
                <h1>Not Found</h1>
            </dev>
        </div>
    );
};

export default NotFound;
