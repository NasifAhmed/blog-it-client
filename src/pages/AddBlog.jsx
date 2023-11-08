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
import { useMutation } from "@tanstack/react-query";
import { useAxios } from "../hooks/useAxios";
import { useContext, useState } from "react";
import { AuthContext } from "../providers/AuthProvider";
import { Heading1 } from "lucide-react";

const AddBlog = () => {
    const [isLoading, setIsLoading] = useState(false);
    const axios = useAxios();
    const { user } = useContext(AuthContext);

    const addBlogMutation = useMutation({
        mutationFn: (data) => {
            axios
                .post("/blogs", data, { withCredentials: true })
                .then((res) => console.log(`Post query response ${res}`));
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
        addBlogMutation.mutate({
            title: title,
            image_url: imageURL,
            desc_short: shortDesc,
            desc_long: longDesc,
            category: category,
            owner: user.email,
            owner_picture: user.photoURL,
            time_added: time.toISOString(),
            time_updated: time.toISOString(),
        });
    };

    return (
        <div>
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
                            disabled={addBlogMutation.isLoading}
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
                            disabled={addBlogMutation.isLoading}
                        />
                        <Label className=" font-medium" htmlFor="category">
                            Select a Category
                        </Label>
                        <Select required name="category" id="category">
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
                                <SelectItem value="health">Health</SelectItem>
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
                            disabled={addBlogMutation.isLoading}
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
                            disabled={addBlogMutation.isLoading}
                        />
                    </div>
                    <Button disabled={addBlogMutation.isLoading}>
                        {/* {isLoading && (
                            <Icons.spinner className="mr-2 h-4 w-4 animate-spin" />
                        )} */}
                        Add
                    </Button>
                    {addBlogMutation.isSuccess && (
                        <div>
                            <h1>SUCCESS</h1>
                        </div>
                    )}
                </div>
            </form>
        </div>
    );
};

export default AddBlog;
