import { useMutation } from "@tanstack/react-query";
import { useAxios } from "./useAxios";

export const useDelete = (endPoint) => {
    const axios = useAxios(false);
    const deleteData = async () => {
        const response = await axios.delete(endPoint);
        console.log(`Delete query response ${response}`);
    };
    return useMutation({
        mutationFn: deleteData,
    });
};
