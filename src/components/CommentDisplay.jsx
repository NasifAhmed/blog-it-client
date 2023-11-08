import { Button } from "./ui/button";
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "./ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { useAxios } from "../hooks/useAxios";
import { useQuery } from "@tanstack/react-query";

const CommentDisplay = ({ blogId }) => {
    const axios = useAxios();

    const commentResponse = useQuery({
        queryKey: ["comments", blogId],
        queryFn: async () => {
            const res = await axios.get(
                `/comments?blog=${blogId}&sort=-time_added`
            );

            // await new Promise((resolve) => setTimeout(resolve, 3000));
            return res.data;
        },
    });

    return (
        <>
            {commentResponse.isLoading ? (
                <div></div>
            ) : (
                commentResponse.data.map((data) => (
                    <div className="my-5" key={data._id}>
                        <Card>
                            <CardHeader>
                                <div className="flex justify-start items-center gap-5">
                                    <Avatar>
                                        <AvatarImage src={data.image_url} />
                                        <AvatarFallback>CN</AvatarFallback>
                                    </Avatar>
                                    <div>
                                        <h2 className="text-xl font-semibold">
                                            {data.name}
                                        </h2>
                                    </div>
                                </div>
                            </CardHeader>
                            <CardContent>
                                <p className="text-lg">{data.comment}</p>
                            </CardContent>
                        </Card>
                    </div>
                ))
            )}
        </>
    );
};

export default CommentDisplay;
