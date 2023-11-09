import BlogCard from "../components/BlogCard";
import BlogsSkeleton from "../components/BlogsSkeleton";
import { useAxios } from "../hooks/useAxios";
import { useQuery } from "@tanstack/react-query";
import toast from "react-hot-toast";

const RecentBlogs = () => {
    const axios = useAxios();
    const response = useQuery({
        queryKey: ["blogs", "recent", "blogcards"],
        queryFn: async () => {
            const res = await axios.get("/blogs?sort=-time_added");

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
                    response.data
                        .slice(0, 6)
                        .map((data) => (
                            <BlogCard
                                key={data._id}
                                payload={data}
                                toast={toast}
                            ></BlogCard>
                        ))
                )}
            </div>
        </div>
    );
};

export default RecentBlogs;
