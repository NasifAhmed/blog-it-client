import { useMutation } from "@tanstack/react-query";
import { useAxios } from "./useAxios";

export const usePost = () => {
    const axios = useAxios(false);
    const postData = async (endPoint, data) => {
        const response = await axios.post(endPoint, data);
        console.log(`Post query response ${response}`);
    };

    return useMutation({
        mutationFn: postData,
    });
};
