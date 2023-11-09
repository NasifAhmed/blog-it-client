import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "../components/ui/card";
import { Button } from "../components/ui/button";
import { useAxios } from "../hooks/useAxios";
import { useQuery } from "@tanstack/react-query";
import { useParams } from "react-router-dom";
import Paragraph from "../components/Paragraph";
import BlogDetailsSkeleton from "../components/BlogDetailsSkeleton";
import toast from "react-hot-toast";
import CommentBox from "../components/CommentBox";
import CommentDisplay from "../components/CommentDisplay";
import { useContext, useState } from "react";
import { AuthContext } from "../providers/AuthProvider";
import { useNavigate } from "react-router-dom";

const BlogDetails = () => {
    const axios = useAxios();
    const { id } = useParams();
    const navigate = useNavigate();
    const { user, isLoading } = useContext(AuthContext);

    const response = useQuery({
        queryKey: ["blogdetails", id],
        queryFn: async () => {
            const res = await axios.get(`/blogs?id=${id}`);
            // await new Promise((resolve) => setTimeout(resolve, 3000));
            return res.data;
        },
    });
    const updateButtonHandler = () => {
        navigate(`/update-blog/${response.data._id}`);
    };

    return (
        <>
            <div className="max-w-[1024px] mx-auto">
                {response.isLoading ? (
                    <BlogDetailsSkeleton></BlogDetailsSkeleton>
                ) : (
                    <>
                        <Card className="space-y-4 md:space-y-8 md:px-14 mb-10">
                            <CardTitle className="text-2xl md:text-5xl text-center mt-5 md:mt-10    ">
                                {response.data.title}
                            </CardTitle>
                            <CardDescription className="text-base md:text-xl text-center">
                                {response.data.owner}
                            </CardDescription>
                            <CardContent className="text-base md:text-lg space-y-7">
                                <div
                                    className="h-[300px] md:h-[500px] bg-local bg-no-repeat bg-center rounded-md"
                                    style={{
                                        backgroundImage: `url(${response.data.image_url})`,
                                    }}
                                ></div>
                                {/* <p className="">{response.data.desc_long}</p> */}
                                <div className="text-base md:text-xl">
                                    <div>
                                        <p>
                                            {" "}
                                            <span className="font-semibold">
                                                Short :
                                            </span>{" "}
                                            {response.data.desc_short}
                                        </p>
                                    </div>
                                    <br />
                                    {response.data.desc_long
                                        .split("\n\n")
                                        .map((paragraph) => (
                                            <Paragraph
                                                key="2"
                                                para={paragraph}
                                            ></Paragraph>
                                        ))}
                                </div>
                            </CardContent>
                            <CardFooter>
                                {user ? (
                                    response.data.owner === user.email && (
                                        <Button onClick={updateButtonHandler}>
                                            Update Post
                                        </Button>
                                    )
                                ) : (
                                    <div></div>
                                )}
                            </CardFooter>
                        </Card>
                        {user && (
                            <CommentBox
                                toast={toast}
                                blogContext={id}
                                ownerCheck={response.data.owner === user.email}
                            ></CommentBox>
                        )}
                        <div>
                            <h1 className="md:text-2xl text-center underline mt-10">
                                Comments
                            </h1>
                        </div>
                        <CommentDisplay blogId={id} />
                    </>
                )}
            </div>
        </>
    );
};

export default BlogDetails;
