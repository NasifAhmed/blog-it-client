import axios from "axios";

export const useAxios = () => {
    const instance = axios.create({
        baseURL: "http://localhost:4000/api/v1",
        timeout: 1000,
        headers: { "X-Custom-Header": "foobar" },
    });
    return instance;
};
