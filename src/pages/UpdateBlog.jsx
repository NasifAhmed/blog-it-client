import { Label } from "@radix-ui/react-dropdown-menu";
import { Input } from "../components/ui/input";
import { Button } from "../components/ui/button";
import { Textarea } from "../components/ui/textarea";
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "../components/ui/select";
import { useMutation, useQuery } from "@tanstack/react-query";
import { useAxios } from "../hooks/useAxios";
import { useContext, useState } from "react";
import { AuthContext } from "../providers/AuthProvider";
import { Heading1 } from "lucide-react";
import { useParams } from "react-router-dom";
import toast, { Toaster } from "react-hot-toast";

const UpdateBlog = () => {
    const [isLoading, setIsLoading] = useState(false);
    const { id } = useParams();
    const axios = useAxios();
    const { user } = useContext(AuthContext);

    const updateBlogMutation = useMutation({
        mutationFn: async (data) => {
            await axios
                .put(`/blogs?id=${id}`, data, { withCredentials: true })
                .then((res) => console.log(`Post query response ${res}`));
        },
    });

    const { data } = useQuery({
        queryKey: ["blogdetails", "update", id],
        queryFn: async () => {
            const res = await axios.get(`/blogs?id=${id}`);
            // await new Promise((resolve) => setTimeout(resolve, 3000));
            toast.success("Data successfully fetched!");
            return res.data;
        },
    });

    const handleSubmit = (e) => {
        e.preventDefault();
        const form = new FormData(e.currentTarget);
        console.log(form);
        console.log(e);
        const title = form.get("title");
        const imageURL = form.get("imageUrl");
        const category = form.get("category");
        const shortDesc = form.get("shortDesc");
        const longDesc = form.get("longDesc");
        console.log(title, imageURL, category, shortDesc, longDesc);
        const time = new Date();

        toast.promise(
            updateBlogMutation.mutateAsync({
                title: title,
                image_url: imageURL,
                desc_short: shortDesc,
                desc_long: longDesc,
                category: category,
                owner: user.email,
                time_added: time.toISOString(),
                time_updated: time.toISOString(),
            }),
            {
                loading: "Adding to wishlist...",
                success: <b>Added to wishlist!</b>,
                error: <b>Could not save.</b>,
            }
        );
    };

    return (
        <div>
            {data && (
                <form onSubmit={handleSubmit} className="md:mx-32 mx-5 text-xl">
                    <div className="grid gap-3">
                        <div className="grid gap-2">
                            <Label className=" font-medium" htmlFor="title">
                                Title
                            </Label>
                            <Input
                                className="text-lg"
                                required
                                name="title"
                                id="title"
                                placeholder="Blog Title"
                                type="text"
                                value={data.title}
                                disabled={updateBlogMutation.isLoading}
                            />
                            <Label className=" font-medium" htmlFor="imageUrl">
                                Image URL
                            </Label>
                            <Input
                                className="text-lg"
                                name="imageUrl"
                                id="imageUrl"
                                placeholder="URL of a relevant image"
                                type="url"
                                value={data.image_url}
                                disabled={updateBlogMutation.isLoading}
                            />
                            <Label className=" font-medium" htmlFor="category">
                                Select a Category
                            </Label>
                            <Select
                                required
                                name="category"
                                id="category"
                                defaultValue={data.category}
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
                                    <SelectItem value="politics">
                                        Politics
                                    </SelectItem>
                                    <SelectItem value="entertainment">
                                        Entertainment
                                    </SelectItem>
                                    <SelectItem value="guide">Guide</SelectItem>
                                    <SelectItem value="religion">
                                        Religion
                                    </SelectItem>
                                    <SelectItem value="health">
                                        Health
                                    </SelectItem>
                                </SelectContent>
                            </Select>

                            <Label className=" font-medium" htmlFor="shortDesc">
                                Blog Summary
                            </Label>
                            <Textarea
                                className="h-20 text-lg"
                                required
                                name="shortDesc"
                                id="shortDesc"
                                placeholder="Write a one line summary for your blog"
                                type="text"
                                value={data.desc_short}
                                disabled={updateBlogMutation.isLoading}
                            />
                            <Label className=" font-medium" htmlFor="longDesc">
                                Blog
                            </Label>
                            <Textarea
                                className="h-80 text-lg"
                                required
                                name="longDesc"
                                id="longDesc"
                                placeholder="Write your blog here."
                                type="text"
                                value={data.desc_long}
                                disabled={updateBlogMutation.isLoading}
                            />
                        </div>
                        <Button disabled={updateBlogMutation.isLoading}>
                            {/* {isLoading && (
                            <Icons.spinner className="mr-2 h-4 w-4 animate-spin" />
                        )} */}
                            Add
                        </Button>
                        {updateBlogMutation.isSuccess && (
                            <div>
                                <h1>SUCCESS</h1>
                            </div>
                        )}
                    </div>
                </form>
            )}

            <Toaster position="top-center" reverseOrder={true}></Toaster>
        </div>
    );
};

export default UpdateBlog;
