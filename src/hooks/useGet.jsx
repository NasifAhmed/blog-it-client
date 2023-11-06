import { useQuery } from "@tanstack/react-query";
import { useAxios } from "./useAxios";

export const useGet = (endPoint, chacheName) => {
    const axios = useAxios(false);
    const getData = async () => {
        const response = await axios.get(endPoint);
        console.log(response);
        return response.data;
    };

    const { data, isError, error, isLoading, isSuccess, refetch } = useQuery({
        queryKey: chacheName,
        queryFn: getData,
    });
    console.log(data);
    return { data, isError, error, isLoading, isSuccess, refetch };
};
