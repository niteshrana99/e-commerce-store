import useHttpService from "@/providers/useHttpService";
import { useQuery } from "@tanstack/react-query";
import { useParams } from "next/navigation"

export const useGetColors = () => {
    const { categoryId } = useParams();
    const { get } = useHttpService();

    return useQuery({
        queryKey: ['getAllColors', categoryId],
        queryFn: async () => {
            const response = await get(`colors`);
            return response;
        },
    })
}