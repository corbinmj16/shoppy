"use client";

import { useState } from "react";
import { IProduct, ProductViewOptions } from "../_types/Products";
import ProductGrid from "./ProductGrid";
import ProductList from "./ProductList";
import ProductViewActions from "./ProductViewActions";

export default function Products({ products }: { products: [IProduct] }) {
  const [productView, setProductView] = useState<ProductViewOptions>("grid");

  return (
    <>
      <ProductViewActions
        productView={productView}
        setProductView={setProductView}
      />

      {productView === "grid" ? (
        <ProductGrid products={products} />
      ) : (
        <ProductList products={products} />
      )}
    </>
  );
}
