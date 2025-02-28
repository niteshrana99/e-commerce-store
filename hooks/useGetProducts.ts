import useHttpService from '@/providers/useHttpService';
import { useQuery } from '@tanstack/react-query';

export const useGetProducts = (query?: string) => {
  const { get } = useHttpService();

  return useQuery({
    queryKey: ['getProducts', query],
    queryFn: async () => {
      const response = query
        ? await get(`products?${query}`)
        : await get(`products`);
      return response;
    },
  });
};
