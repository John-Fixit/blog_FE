import { API_URL } from "./api_urls";
import { axiosInstance } from "./axiosInstance";

export async function fetchPosts() {
    const response = await axiosInstance.get(API_URL.single_post);
    return response.data;
  }