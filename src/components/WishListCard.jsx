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
import { useMutation, useQuery } from "@tanstack/react-query";
import { useNavigate } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../providers/AuthProvider";
import BlogsSkeleton from "./BlogsSkeleton";

const WishListCard = ({ payload, wishListCallBack, toast }) => {
    const navigate = useNavigate();
    const axios = useAxios();
    const { user } = useContext(AuthContext);

    const deleteWishListMutation = useMutation({
        mutationFn: async () => {
            await axios
                .delete(`/wishlist?id=${payload._id}`, {
                    withCredentials: true,
                })
                .then((res) => console.log(`Post query response ${res}`));
        },
    });

    const blogData = useQuery({
        queryKey: ["wishlist", "cards", payload._id],
        queryFn: async () => {
            const res = await axios.get(`/blogs?id=${payload.blog}`);
            toast.success("Data successfully fetched!");
            return res.data;
        },
    });

    const detailsHandler = (id) => {
        navigate(`/blogs/${id}`);
    };

    const wishlistHandler = () => {
        const time = new Date();
        toast
            .promise(
                deleteWishListMutation.mutateAsync({
                    blog: payload._id,
                    owner: user.email,
                    time_added: time.toISOString(),
                }),
                {
                    loading: "Deleting wishlist...",
                    success: <b>Wishlist deleted!</b>,
                    error: <b>Could not delete.</b>,
                }
            )
            .then(wishListCallBack.refetch);
    };

    return (
        <>
            {blogData.isLoading ? (
                <BlogsSkeleton key={1}></BlogsSkeleton>
            ) : (
                <div className="transform transition-transform hover:scale-105 cursor-pointer">
                    <Card className="h-full w-full -z-50">
                        <CardHeader>
                            <CardTitle>
                                <h1 className="text-xl md:text-2xl">
                                    {blogData.data.title}
                                </h1>
                            </CardTitle>
                            <CardDescription>
                                <Badge className="text-xs md:text-sm">
                                    <span>{blogData.data.category}</span>
                                </Badge>
                            </CardDescription>
                        </CardHeader>
                        <CardContent>
                            <div
                                className="h-[300px] relative rounded-md bg-fixed bg-no-repeat bg-cover"
                                style={{
                                    backgroundImage: `url(${blogData.data.image_url})`,
                                }}
                            >
                                <div className="h-[150px] absolute bottom-0 left-0 opacity-90 w-full rounded-md p-5 bg-gradient-to-t from-white dark:from-black flex flex-col justify-end items-center">
                                    <p className="text-base md:text-xl">
                                        {blogData.data.desc_short}
                                    </p>
                                </div>
                            </div>
                        </CardContent>
                        <CardFooter>
                            <div className="flex justify-between w-full ">
                                <Button
                                    onClick={() =>
                                        detailsHandler(blogData.data._id)
                                    }
                                >
                                    Details
                                </Button>
                                <Button
                                    variant="destructive"
                                    onClick={wishlistHandler}
                                >
                                    Delete
                                </Button>
                            </div>
                        </CardFooter>
                    </Card>
                    <div></div>
                </div>
            )}
        </>
    );
};

export default WishListCard;
