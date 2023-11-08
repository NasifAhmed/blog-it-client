import BlogTable from "../components/BlogTable";
import {
    Card,
    CardContent,
    CardFooter,
    CardHeader,
    CardTitle,
} from "../components/ui/card";

const Featured = () => {
    return (
        <div>
            <Card className="">
                <CardHeader></CardHeader>
                <CardContent>
                    <BlogTable></BlogTable>
                </CardContent>
                <CardFooter></CardFooter>
            </Card>
        </div>
    );
};

export default Featured;
