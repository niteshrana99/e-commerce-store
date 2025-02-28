'use client';

import { useGetBillBoardById } from '@/hooks/useGetBillboardById';
import Container from '../components/container';
import Billboard from '../components/ui/billboard';
import ProductList from '../components/products-list';
import { useGetProducts } from '@/hooks/useGetProducts';

const HomePage = () => {
  const { data: billboard, isLoading: isBillboardLoading } = useGetBillBoardById();
  const { data: products, isLoading: isProductLoading } = useGetProducts('isFeatured=true');

  if(isBillboardLoading || isProductLoading) return null;
  return (
    <Container>
      <div className='space-y-10 pb-10'>
        <Billboard data={billboard} />
        <div className='flex flex-col gap-y-8 px-4 sm:px-6 lg:px-8'>
          <ProductList
            title='Featured Products'
            items={products || []}
          />
        </div>
      </div>
    </Container>
  );
};

export default HomePage;
