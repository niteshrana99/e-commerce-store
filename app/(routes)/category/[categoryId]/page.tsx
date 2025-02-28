'use client';

import Container from '@/app/components/container';
import Billboard from '@/app/components/ui/billboard';
import NoResults from '@/app/components/ui/no-results';
import ProductCard from '@/app/components/ui/product-card';
import { useGetCategoryById } from '@/hooks/useGetCategoryById';
import { useGetProducts } from '@/hooks/useGetProducts';
import { useParams, useSearchParams } from 'next/navigation';
import Filter from './components/filter';
import { useGetSizes } from '@/hooks/useGetSizes';
import { useGetColors } from '@/hooks/useGetColors';
import MobileFilters from './components/mobile-filters';
import qs from 'query-string';

const CategoryPage = () => {
  const { categoryId } = useParams();
  const searchParams = useSearchParams();

  const queryString = qs.stringify({
    sizeId: searchParams.get('sizeId'),
    colorId: searchParams.get('colorId'),
    categoryId
  }, { skipNull: true });

  
  const { data: products, isLoading: isProductsLoading } = useGetProducts(queryString);
  const { data: category, isLoading: isCategoryLoading } = useGetCategoryById(
    categoryId as string
  );

  const { data: sizes, isLoading: isSizesLoading } = useGetSizes();
  const { data: colors, isLoading: isColorsLoading } = useGetColors();

  if (isProductsLoading || isCategoryLoading || isSizesLoading || isColorsLoading) return null;

  return (
    <div className='bg-white'>
      <Container>
        <Billboard data={category.billboard} />
        <div className='px-4 sm:px-6 lg:px-8 pb-24'>
          <div className='lg:grid lg:grid-cols-5 lg:gap-x-8'>
            <MobileFilters sizes={sizes} colors={colors} />
            <div className='hidden lg:block'>
              <Filter
                valueKey='sizeId'
                name='Sizes'
                data={sizes}
              />
              <Filter
                valueKey='colorId'
                name='Colors'
                data={colors}
              />
            </div>
            <div className='mt-6 lg:col-span-4 lg:mt-0'>
              {products.length === 0 && <NoResults />}
              <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4'>
                {products.map((item: any) => (
                  <ProductCard
                    key={item.id}
                    data={item}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default CategoryPage;
