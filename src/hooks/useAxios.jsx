import axios from "axios";

export const useAxios = () => {
    const instance = axios.create({
        baseURL: "https://b8a11-server-side-nasif-ahmed.vercel.app/api/v1",
        // baseURL: "http://localhost:4000/api/v1",
        timeout: 1000,
        headers: { "X-Custom-Header": "foobar" },
    });
    return instance;
};
