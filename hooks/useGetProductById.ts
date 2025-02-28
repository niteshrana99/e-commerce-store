import useHttpService from "@/providers/useHttpService";
import { useQuery } from "@tanstack/react-query";

export const useGetProductById = ({ productId }: { productId: string }) => {
    const { get } = useHttpService();

    return useQuery({
        queryKey: ['getProductById', productId],
        queryFn: async () => {
            const response = await get(`products/${productId}`);
            return response;
        },
    })
}