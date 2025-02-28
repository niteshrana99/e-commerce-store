import useHttpService from "@/providers/useHttpService";
import { useQuery } from "@tanstack/react-query";

export const useGetCategoryById = (categoryId: string) => {
    const { get } = useHttpService();

    return useQuery({
        queryKey: ['getCategoryById', categoryId],
        queryFn: async () => {
            const response = await get(`categories/${categoryId}`);
            return response;
        },
    })
}