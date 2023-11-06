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

import { useState } from "react";

const AddBlog = () => {
    const [isLoading, setIsLoading] = useState(false);

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
    };

    return (
        <div className="">
            <form onSubmit={handleSubmit} className="md:mx-32 mx-5">
                <div className="grid gap-3">
                    <div className="grid gap-2">
                        <Label className="" htmlFor="title">
                            Title
                        </Label>
                        <Input
                            required
                            name="title"
                            id="title"
                            placeholder="Blog Title"
                            type="text"
                            disabled={isLoading}
                        />
                        <Label className="" htmlFor="imageUrl">
                            Image URL
                        </Label>
                        <Input
                            name="imageUrl"
                            id="imageUrl"
                            placeholder="URL of a relevant image"
                            type="url"
                            disabled={isLoading}
                        />
                        <Label className="" htmlFor="category">
                            Select a Category
                        </Label>
                        <Select name="category" id="category" required>
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

                        <Label className="" htmlFor="shortDesc">
                            Blog Summary
                        </Label>
                        <Textarea
                            className="h-20"
                            required
                            name="shortDesc"
                            id="shortDesc"
                            placeholder="Write a one line summary for your blog"
                            type="text"
                            disabled={isLoading}
                        />
                        <Label className="" htmlFor="longDesc">
                            Blog
                        </Label>
                        <Textarea
                            className="h-80"
                            required
                            name="longDesc"
                            id="longDesc"
                            placeholder="Write your blog here."
                            type="text"
                            disabled={isLoading}
                        />
                    </div>
                    <Button disabled={isLoading}>
                        {/* {isLoading && (
                            <Icons.spinner className="mr-2 h-4 w-4 animate-spin" />
                        )} */}
                        Add
                    </Button>
                </div>
            </form>
        </div>
    );
};

export default AddBlog;
