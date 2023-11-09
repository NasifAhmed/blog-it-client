import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "./ui/card";
import { Badge } from "./ui/badge";
import { Button } from "./ui/button";
import { useAxios } from "../hooks/useAxios";
import { useMutation } from "@tanstack/react-query";
import { useNavigate } from "react-router-dom";
import { useContext, useEffect } from "react";
import { AuthContext } from "../providers/AuthProvider";

const BlogCard = ({ payload, toast }) => {
    const navigate = useNavigate();
    const axios = useAxios();
    const { user } = useContext(AuthContext);

    const addWishListMutation = useMutation({
        mutationFn: async (data) => {
            await axios
                .post("/wishlist", data, { withCredentials: true })
                .then((res) => console.log(`Post query response ${res}`));
        },
    });

    const detailsHandler = (id) => {
        navigate(`/blogs/${id}`);
    };

    const wishlistHandler = () => {
        const time = new Date();

        toast.promise(
            addWishListMutation.mutateAsync({
                blog: payload._id,
                owner: user.email,
                time_added: time.toISOString(),
            }),
            {
                loading: "Adding to wishlist...",
                success: <b>Added to wishlist!</b>,
                error: <b>Could not save.</b>,
            }
        );
    };

    return (
        <div className="transform transition-transform hover:scale-105 cursor-pointer">
            <Card className="h-full w-full -z-50 flex flex-col">
                <CardHeader className="flex-grow">
                    <CardTitle>
                        <h1 className="text-xl md:text-2xl">{payload.title}</h1>
                    </CardTitle>
                </CardHeader>
                <CardContent className="">
                    <CardDescription className="mb-6">
                        <Badge className="text-xs md:text-sm">
                            <span>{payload.category}</span>
                        </Badge>
                    </CardDescription>
                    <div
                        className="h-[300px] relative rounded-md bg-fixed bg-no-repeat bg-cover"
                        style={{
                            backgroundImage: `url(${payload.image_url})`,
                        }}
                    >
                        <div className="h-[300px] absolute bottom-0 left-0  w-full rounded-md p-5 bg-gradient-to-t from-black flex flex-col justify-end items-center">
                            <p className="text-base md:text-xl text-white">
                                {payload.desc_short}
                            </p>
                        </div>
                    </div>
                </CardContent>
                <CardFooter>
                    <div className="flex justify-between w-full ">
                        <Button onClick={() => detailsHandler(payload._id)}>
                            Details
                        </Button>
                        {user && (
                            <Button onClick={wishlistHandler}>Wishlist</Button>
                        )}
                    </div>
                </CardFooter>
            </Card>
            <div></div>
        </div>
    );
};

export default BlogCard;
