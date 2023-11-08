import { Label } from "@radix-ui/react-dropdown-menu";
import { Input } from "./ui/input";
import { Button } from "./ui/button";
import { Textarea } from "./ui/textarea";
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "./ui/select";
import { useMutation } from "@tanstack/react-query";
import { useAxios } from "../hooks/useAxios";
import { useContext, useState } from "react";
import { AuthContext } from "../providers/AuthProvider";
import { useQueryClient } from "@tanstack/react-query";

const CommentBox = ({ toast, blogContext, ownerCheck }) => {
    const axios = useAxios();
    const queryClient = useQueryClient();
    const { user } = useContext(AuthContext);

    const addCommentMutation = useMutation({
        mutationFn: (data) => {
            axios
                .post("/comments", data, { withCredentials: true })
                .then((res) => console.log(`Post query response ${res}`));
        },
    });

    const handleSubmit = (e) => {
        e.preventDefault();
        const form = new FormData(e.currentTarget);
        console.log(form);
        console.log(e);
        const comment = form.get("comment");
        const name = user.displayName;
        const avatar = user.photoURL;
        const blogId = blogContext;
        console.log(comment, name, avatar, blogId);
        const time = new Date();
        toast
            .promise(
                addCommentMutation.mutateAsync({
                    blog: blogId,
                    name: name,
                    image_url: avatar,
                    comment: comment,
                    time_added: time.toISOString(),
                }),
                {
                    loading: "Adding comment...",
                    success: <b>Comment added!</b>,
                    error: <b>Could not add comment.</b>,
                }
            )
            .then(queryClient.invalidateQueries(["comments", blogContext]));
    };

    return (
        <div>
            <form onSubmit={handleSubmit} className="text-xl">
                <div className="grid gap-3">
                    <div className="grid gap-2">
                        <Label className=" font-medium" htmlFor="shortDesc">
                            Comment
                        </Label>
                        <Textarea
                            className="h-20 text-lg"
                            required
                            name="comment"
                            id="eomment"
                            placeholder="Write your comment"
                            type="text"
                            disabled={ownerCheck}
                        />
                    </div>

                    {ownerCheck ? (
                        <Button disabled="true">
                            User can not comment on their own post
                        </Button>
                    ) : (
                        <Button>Add Comment</Button>
                    )}
                </div>
            </form>
        </div>
    );
};

export default CommentBox;
