import useHttpService from "@/providers/useHttpService";
import { useQuery } from "@tanstack/react-query";

export const useGetBillBoardById = () => {
    const billboardId = process.env.NEXT_PUBLIC_BILLBOARD_ID;
    const { get } = useHttpService();

    return useQuery({
        queryKey: ['getBillboardById', billboardId],
        queryFn: async () => {
            const response = await get(`billboards/${billboardId}`);
            return response;
        },
    })
}