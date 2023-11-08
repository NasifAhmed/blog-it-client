import { Skeleton } from "../components/ui/skeleton";
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

const BlogsSkeleton = () => {
    return (
        <div>
            <Card className="h-full w-full">
                <CardHeader>
                    <CardTitle>
                        {/* <h1 className="text-2xl">{payload.title}</h1> */}
                        <Skeleton className="h-4 w-[250px]"></Skeleton>
                    </CardTitle>
                    <CardDescription>
                        {/* <span>{payload.category}</span> */}
                        <Skeleton className="h-4 w-32"></Skeleton>
                    </CardDescription>
                </CardHeader>
                <CardContent>
                    <Skeleton className="h-[300px] w-full"></Skeleton>
                </CardContent>
                <CardFooter>
                    <Skeleton className="flex justify-between w-full ">
                        <Skeleton className="h-20 w-52"></Skeleton>
                        <Skeleton className="h-20 w-52"></Skeleton>
                    </Skeleton>
                </CardFooter>
            </Card>
        </div>
    );
};

export default BlogsSkeleton;
