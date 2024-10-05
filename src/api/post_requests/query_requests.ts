import { useQuery } from "@tanstack/react-query";
import { axiosInstance } from "../axiosInstance";
import { API_URL } from "../api_urls";



export const useGetAllPost = () => {
    const query = useQuery({
        queryKey: ['all_posts'],
        queryFn: async() => {
                const res:any = await axiosInstance.get(API_URL.all_post);
                return res.data
            }
        })
        return query;
}