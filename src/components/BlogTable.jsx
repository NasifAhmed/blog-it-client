import DataTable from "react-data-table-component";
import { useAxios } from "../hooks/useAxios";
import { useQuery } from "@tanstack/react-query";
import { Avatar, AvatarFallback, AvatarImage } from "@radix-ui/react-avatar";

const columns = [
    {
        name: "Serial No.",
        selector: "_id",
        cell: (row, index) => index + 1,
    },
    {
        name: "Blog Title",
        selector: (row) => row.title,
    },
    {
        name: "Blog Owner",
        selector: (row) => row.owner,
    },
    {
        name: "Owner Avatar",
        // selector: (row) => row.owner_picture,
        cell: (row) => (
            <Avatar>
                <AvatarImage src={row.owner_picture} className="w-10" />
                <AvatarFallback>row.title</AvatarFallback>
            </Avatar>
        ),
    },
];

const BlogTable = () => {
    const axios = useAxios();
    const response = useQuery({
        queryKey: ["blogs", "recent", "blogcards"],
        queryFn: async () => {
            const res = await axios.get("/blogs?sort=-time_added");

            // await new Promise((resolve) => setTimeout(resolve, 3000));
            return res.data;
        },
    });

    if (!response.isLoading) {
        console.log(
            `Original Table data order ${JSON.stringify(response.data)}`
        );
        response.data.map((data) => {
            console.log(`${data.title} length is ${data.desc_long.length}`);
        });
        const sorted = response.data
            .sort((blog1, blog2) => blog1.length - blog2.length)
            .slice(0, 10);
        console.log(`Sorted Table data order ${JSON.stringify(sorted)}`);
    }

    return (
        <div>
            {response.isLoading ? (
                <div>LOADING</div>
            ) : (
                <DataTable
                    columns={columns}
                    data={response.data
                        .sort(
                            (blog1, blog2) =>
                                blog2.desc_long.length - blog1.desc_long.length
                        )
                        .slice(0, 10)}
                />
            )}
        </div>
    );
};

export default BlogTable;
