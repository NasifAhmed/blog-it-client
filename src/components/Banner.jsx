import {
    Card,
    CardContent,
    CardFooter,
    CardHeader,
} from "../components/ui/card";

const Banner = () => {
    return (
        <Card className="w-full md:p-10">
            <CardHeader></CardHeader>
            <CardContent className="flex md:flex-row flex-col justify-around items-center max-h-[600px] gap-5">
                <div className="md:grid md:grid-cols-2 md:grid-flow-col gap-5 order-2 md:order-1">
                    <img
                        className="max-h-[620px] w-auto object-cover row-span-2 place-self-center hidden md:block"
                        src="https://i.ibb.co/09Y7MZd/banner1.jpg"
                        alt=""
                    />
                    <img
                        className="max-h-[300px] w-auto object-cover  row-span-1 hidden md:block"
                        src="https://i.ibb.co/zsT4xFH/banner2.jpg"
                        alt=""
                    />
                    <img
                        className="max-h-[300px] w-auto object-cover row-span-1"
                        src="https://i.ibb.co/mCkC1DM/banner3.jpg"
                        alt=""
                    />
                </div>

                <div className=" space-y-4 md:space-y-10 order-1 md:order-2 text-center md:text-left">
                    <h1 className="md:text-9xl text-3xl ">
                        Blog
                        <span className="font-bold text-muted-foreground">
                            .
                        </span>
                        <span>it</span>
                    </h1>
                    <p className="md:text-4xl text-lg">
                        Write the blog you always wanted
                    </p>
                </div>
            </CardContent>
            <CardFooter></CardFooter>
        </Card>
    );
};

export default Banner;
