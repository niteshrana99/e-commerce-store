import useHttpService from "@/providers/useHttpService";
import { useQuery } from "@tanstack/react-query";
import { useParams } from "next/navigation"

export const useGetSizes = () => {
    const { categoryId } = useParams();
    const { get } = useHttpService();

    return useQuery({
        queryKey: ['getAllSizes', categoryId],
        queryFn: async () => {
            const response = await get(`sizes`);
            return response;
        },
    })
}