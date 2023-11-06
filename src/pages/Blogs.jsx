import { useGet } from "../hooks/useGet";

const Blogs = () => {
    const data = useGet("/blogs", ["all"]);

    return <div> {JSON.stringify({ data })} </div>;
};

export default Blogs;
