import BlogCard from "../components/BlogCard";
import BlogsSkeleton from "../components/BlogsSkeleton";
import { useAxios } from "../hooks/useAxios";
import { useQuery } from "@tanstack/react-query";
import toast from "react-hot-toast";
import { Card, CardHeader, CardContent, CardTitle } from "./ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@radix-ui/react-avatar";

const RecentComments = () => {
    const axios = useAxios();
    const response = useQuery({
        queryKey: ["comments", "recent"],
        queryFn: async () => {
            const res = await axios.get("/comments?sort=-time_added");

            // await new Promise((resolve) => setTimeout(resolve, 3000));
            return res.data;
        },
    });

    return (
        <div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
                {response.isLoading ? (
                    <>
                        <BlogsSkeleton key={1}></BlogsSkeleton>
                        <BlogsSkeleton key={2}></BlogsSkeleton>
                        <BlogsSkeleton key={3}></BlogsSkeleton>
                        <BlogsSkeleton key={4}></BlogsSkeleton>
                    </>
                ) : (
                    response.data.slice(0, 6).map((data) => (
                        <Card key={data._id}>
                            <CardHeader>
                                <div className="flex justify-start items-center gap-5">
                                    <Avatar className="w-[40px]">
                                        <AvatarImage src={data.image_url} />
                                        <AvatarFallback>CN</AvatarFallback>
                                    </Avatar>
                                    <div>
                                        <h2 className="text-base md:text-xl font-semibold">
                                            {data.name}
                                        </h2>
                                    </div>
                                </div>
                            </CardHeader>
                            <CardContent>
                                <p className="text-sm md:text-lg">
                                    {data.comment}
                                </p>
                            </CardContent>
                        </Card>
                    ))
                )}
            </div>
        </div>
    );
};

export default RecentComments;
