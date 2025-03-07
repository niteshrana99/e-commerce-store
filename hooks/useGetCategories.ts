import useHttpService from "@/providers/useHttpService";
import { useQuery } from "@tanstack/react-query";
import { useParams } from "next/navigation"

export const useGetCategories = () => {
    const { storeId } = useParams();
    const { get } = useHttpService();

    return useQuery({
        queryKey: ['getCategories', storeId],
        queryFn: async () => {
            const response = await get(`categories`);
            return response;
        },
    })
}