import Banner from "../components/Banner";
import RecentBlogs from "../components/RecentBlogs";
import { Input } from "../components/ui/input";
import { Button } from "../components/ui/button";
import toast from "react-hot-toast";
import {
    Card,
    CardContent,
    CardFooter,
    CardHeader,
    CardTitle,
} from "../components/ui/card";
import RecentComments from "../components/RecentComments";

const Home = () => {
    return (
        <div className="flex-grow space-y-20">
            <Banner></Banner>
            <RecentBlogs></RecentBlogs>
            <Card>
                <CardHeader>
                    <CardTitle>
                        <h1 className="text-center text-xl md:text-4xl mb-10">
                            Recent Comments
                        </h1>
                    </CardTitle>
                </CardHeader>
                <CardContent>
                    <RecentComments></RecentComments>
                </CardContent>
                <CardFooter></CardFooter>
            </Card>
            <Card
                className=" h-96 relative rounded-md bg-fixed bg-no-repeat bg-cover"
                style={{
                    backgroundImage: `url(${"https://i.ibb.co/sWTDJdH/life.jpg"})`,
                }}
            >
                <CardHeader>
                    <CardTitle></CardTitle>
                </CardHeader>
                <CardContent></CardContent>
                <CardFooter></CardFooter>
            </Card>

            <Card className="">
                <CardHeader>
                    <CardTitle className="text-center text-2xl font-semibold">
                        Subscribe to our newsletter !
                    </CardTitle>
                </CardHeader>
                <CardContent className="flex flex-col justify-center items-center space-y-5">
                    <Input
                        type="email"
                        placeholder="Your Email"
                        className="md:w-[350px] lg:w-[500px]"
                        // onChange={(e) => searchHandler(e.target.value)}
                    />
                    <Button
                        onClick={() =>
                            toast.success(
                                "Thank your for subscribing to our newsletter!"
                            )
                        }
                    >
                        Subscribe
                    </Button>
                </CardContent>
            </Card>
        </div>
    );
};

export default Home;
