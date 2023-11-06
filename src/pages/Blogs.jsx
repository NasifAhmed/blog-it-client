import { useGet } from "../hooks/useGet";

const Blogs = () => {
    const data = useGet("/blogs", ["all"]);
    // const res = usePost("/blogs", { test: "testing" });
    // const del = useDelete("/blogs?id=6549175b641e4abdb518074d");
    // const put = usePut("/blogs?id=6549175b641e4abdb518074d", {
    //     category: "sex",
    // });

    return <div></div>;
};

export default Blogs;
