import WishListCard from "../components/WishListCard";
import BlogsSkeleton from "../components/BlogsSkeleton";
import { useAxios } from "../hooks/useAxios";
import { useQuery } from "@tanstack/react-query";
import toast, { Toaster } from "react-hot-toast";
import { useContext, useState } from "react";
import { AuthContext } from "../providers/AuthProvider";

const Wishlist = () => {
    const axios = useAxios();
    const { user, isLoading } = useContext(AuthContext);

    const response = useQuery({
        queryKey: ["wishlist", "data"],
        queryFn: async () => {
            const res = await axios.get(`/wishlist?owner=${user.email}`, {
                withCredentials: true,
            });

            // await new Promise((resolve) => setTimeout(resolve, 3000));
            toast.success("Data successfully fetched!");
            return res.data;
        },
    });

    return (
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-28">
            {response.isLoading ? (
                <>
                    <BlogsSkeleton key={1}></BlogsSkeleton>
                    <BlogsSkeleton key={2}></BlogsSkeleton>
                    <BlogsSkeleton key={3}></BlogsSkeleton>
                    <BlogsSkeleton key={4}></BlogsSkeleton>
                </>
            ) : response.data ? (
                response.data.length ? (
                    response.data.map((data) => (
                        <WishListCard
                            key={data._id}
                            payload={data}
                            wishListCallBack={response}
                            toast={toast}
                        ></WishListCard>
                    ))
                ) : (
                    <>
                        <dev className="hidden md:flex justify-center items-center h-screen w-full ">
                            <img src="src/assets/no_data.svg" alt="" />
                        </dev>
                        <dev className="flex justify-center items-center text-center text-4xl font-semibold h-screen w-full row-span-2">
                            <h1>No Wishlist Added</h1>
                        </dev>
                    </>
                )
            ) : (
                <>
                    <dev className="hidden md:flex justify-center items-center h-screen w-full ">
                        <img src="src/assets/no_data.svg" alt="" />
                    </dev>
                    <dev className="flex justify-center items-center text-center text-4xl font-semibold h-screen w-full row-span-2">
                        <h1>No Wishlist Added</h1>
                    </dev>
                </>
            )}
            <Toaster position="top-center" reverseOrder={true}></Toaster>
        </div>
    );
};

export default Wishlist;
