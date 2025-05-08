"use client";

import { useState } from "react";
import { LayoutList, LayoutGrid } from "lucide-react";
import { IProduct } from "../_types/Products";
import ProductGrid from "./ProductGrid";
import ProductList from "./ProductList";
import IslandContainer from "./IslandContainer";

export default function Products({ products }: { products: [IProduct] }) {
  const [productView, setProductView] = useState("list");

  return (
    <>
      <ul className="flex gap-4 justify-end">
        <li>
          <IslandContainer
            className={`flex ${
              productView === "list" ? "shadow-indigo-500" : ""
            }`}
          >
            <button
              type="button"
              onClick={() => setProductView("list")}
              className={`${
                productView === "list" ? "text-indigo-500" : ""
              } hover:cursor-pointer hover:text-indigo-700`}
            >
              <span className="sr-only">List Layout</span>
              <LayoutList />
            </button>
          </IslandContainer>
        </li>
        <li>
          <IslandContainer
            className={`flex ${
              productView === "grid" ? "shadow-indigo-500" : ""
            }`}
          >
            <button
              type="button"
              onClick={() => setProductView("grid")}
              className={`${
                productView === "grid" ? "text-indigo-500" : ""
              } hover:cursor-pointer hover:text-indigo-700`}
            >
              <span className="sr-only">Grid Layout</span>
              <LayoutGrid />
            </button>
          </IslandContainer>
        </li>
      </ul>

      {productView === "grid" ? (
        <ProductGrid products={products} />
      ) : (
        <ProductList products={products} />
      )}
    </>
  );
}
