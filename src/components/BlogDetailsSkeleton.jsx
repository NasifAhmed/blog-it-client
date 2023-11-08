import { Skeleton } from "./ui/skeleton";
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "./ui/card";

const BlogDetailsSkeleton = () => {
    return (
        <>
            <div className="w-[1024px] mx-auto">
                <Card className="space-y-4 md:space-y-8 md:px-14 w-full">
                    <CardTitle className="text-3xl md:text-5xl text-center mt-5 md:mt-10">
                        <Skeleton className="w-full h-10"></Skeleton>
                    </CardTitle>
                    <CardDescription className="text-lg md:text-xl text-center flex justify-center items-center">
                        <Skeleton className="w-48 h-5"></Skeleton>
                    </CardDescription>
                    <CardContent className="text-base md:text-lg space-y-7">
                        <div className="h-[300px] md:h-[500px] rounded-md">
                            <Skeleton className="w-full h-full"></Skeleton>
                        </div>
                        <Skeleton className="w-full h-screen"></Skeleton>
                    </CardContent>
                    <CardFooter></CardFooter>
                </Card>
            </div>
        </>
    );
};

export default BlogDetailsSkeleton;
