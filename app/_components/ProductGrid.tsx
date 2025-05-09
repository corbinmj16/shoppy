"use client";

import { IProduct } from "@/app/_types/Products";
import ProductGridCard from "@/app/_components/ProductGridCard";

export default function ProductGrid({ products }: { products: IProduct[] }) {
  return (
    <div className="space-y-4">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {products?.map((product: IProduct) => (
          <ProductGridCard
            key={product.id}
            product={product}
          />
        ))}
      </div>
    </div>
  );
}
