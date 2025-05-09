"use client";

import { IProduct } from "@/app/_types/Products";
import ProductListCard from "@/app/_components/ProductListCard";

export default function ProductGrid({ products }: { products: IProduct[] }) {
  return (
    <div className="space-y-4">
      <div className="flex flex-col gap-6">
        {products?.map((product: IProduct) => (
          <ProductListCard
            key={product.id}
            product={product}
          />
        ))}
      </div>
    </div>
  );
}
