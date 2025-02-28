"use client";

import Container from "@/app/components/container";
import Gallery from "@/app/components/gallery";
import Info from "@/app/components/info";
import ProductList from "@/app/components/products-list";
import { useGetProductById } from "@/hooks/useGetProductById";
import { useGetProducts } from "@/hooks/useGetProducts";
import { useParams } from "next/navigation";

const ProductPage = () => {
//   const product = await getProduct(params.productId);
//   const suggestedProducts = await getProducts({ 
//     categoryId: product?.category?.id
//   });

//   if (!product) {
//     return null;
//   }

const { productId } = useParams();

const  { data: product, isLoading }= useGetProductById({ productId: productId as string });
console.log(product)
const  { data: suggestedProducts, isLoading: l }= useGetProducts(`categoryId=${product?.categoryId}`);

if(isLoading || l) return null;

  return (
    <div className="bg-white">
      <Container>
        <div className="px-4 py-10 sm:px-6 lg:px-8">
          <div className="lg:grid lg:grid-cols-2 lg:items-start lg:gap-x-8">
            {/* product.images */}
            <Gallery images={product.images} />
            <div className="mt-10 px-4 sm:mt-16 sm:px-0 lg:mt-0">
              <Info data={product} />
            </div>
          </div>
          <hr className="my-10" />
          <ProductList title="Related Items" items={suggestedProducts} />
        </div>
      </Container>
    </div>  
  )
}

export default ProductPage;