import { useMutation } from "@tanstack/react-query";
import { useAxios } from "./useAxios";

export const usePut = (endPoint, data) => {
    const axios = useAxios(false);
    const updateData = async () => {
        const response = await axios.put(endPoint, data);
        console.log(`Put query response ${response}`);
    };

    return useMutation({
        mutationFn: updateData,
    });
};
