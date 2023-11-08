import BlogCard from "../components/BlogCard";
import BlogsSkeleton from "../components/BlogsSkeleton";
import { useAxios } from "../hooks/useAxios";
import { useQuery } from "@tanstack/react-query";
import toast, { Toaster } from "react-hot-toast";
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "../components/ui/select";
import { Input } from "../components/ui/input";
import { Card } from "../components/ui/card";
import { useEffect, useState } from "react";

const Blogs = () => {
    const axios = useAxios();
    const [blogs, setBlogs] = useState();

    const response = useQuery({
        queryKey: ["blogs", "blogcards"],
        queryFn: async () => {
            const res = await axios.get("/blogs");

            // await new Promise((resolve) => setTimeout(resolve, 3000));
            setBlogs(res.data);
            toast.success("Data successfully fetched!");
            return res.data;
        },
    });

    const categoryHandler = (selectedCategory) => {
        const newBlogs = response.data.filter(
            (blog) => blog.category === selectedCategory
        );
        setBlogs(newBlogs);
    };

    const searchHandler = (typedValue) => {
        const newBlogs = response.data.filter((blog) =>
            blog.title.toLowerCase().includes(typedValue.toLowerCase())
        );
        setBlogs(newBlogs);
    };

    return (
        <div className="space-y-10">
            <Card className="p-10 flex justify-between items-center">
                <div>
                    <h1 className="text-xl pb-3 font-semibold">
                        Filet By Category :
                    </h1>
                    <Select
                        onValueChange={(selectedValue) =>
                            categoryHandler(selectedValue)
                        }
                        name="category"
                        id="category"
                    >
                        <SelectTrigger className="w-[180px]">
                            <SelectValue placeholder="Categories" />
                        </SelectTrigger>
                        <SelectContent>
                            <SelectItem value="tech">Tech</SelectItem>
                            <SelectItem value="philosophy">
                                Philosophy
                            </SelectItem>
                            <SelectItem value="self-improvement">
                                Self Improvement
                            </SelectItem>
                            <SelectItem value="politics">Politics</SelectItem>
                            <SelectItem value="entertainment">
                                Entertainment
                            </SelectItem>
                            <SelectItem value="guide">Guide</SelectItem>
                            <SelectItem value="religion">Religion</SelectItem>
                            <SelectItem value="health">Health</SelectItem>
                        </SelectContent>
                    </Select>
                </div>
                <div>
                    <Input
                        type="search"
                        placeholder="Search..."
                        className="md:w-[100px] lg:w-[300px]"
                        onChange={(e) => searchHandler(e.target.value)}
                    />
                </div>
            </Card>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-28">
                {blogs ? (
                    blogs.map((data) => (
                        <BlogCard
                            key={data._id}
                            payload={data}
                            toast={toast}
                        ></BlogCard>
                    ))
                ) : (
                    <>
                        <BlogsSkeleton key={1}></BlogsSkeleton>
                        <BlogsSkeleton key={2}></BlogsSkeleton>
                        <BlogsSkeleton key={3}></BlogsSkeleton>
                        <BlogsSkeleton key={4}></BlogsSkeleton>
                    </>
                )}
                <Toaster position="top-center" reverseOrder={true}></Toaster>
            </div>
        </div>
    );
};

export default Blogs;
