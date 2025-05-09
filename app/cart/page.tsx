"use client";

import { useState, useEffect } from "react";
import ProductCart from "../_components/ProductCart";
import { getStorage } from "../_lib/storage";
import { IProduct } from "../_types/Products";
import { removeFromCart } from "../_lib/productsCart";

export default function CartPage() {
  const [cartProducts, setCartProducts] = useState<[IProduct] | []>([]);

  useEffect(() => {
    setCartProducts(getStorage("cart"));
  }, []);

  function handleRemoveProduct(productId: number) {
    removeFromCart(productId);
    setCartProducts(getStorage("cart"));
  }

  return (
    <section className="space-y-10 mt-10">
      <div>
        <h2 className="text-3xl font-bold">Your Shoppy Cart</h2>
        <p className="text-zinc-500 text-lg">Go on now, check out!</p>
      </div>

      {cartProducts.length <= 0 ? (
        <p className="text-center text-gray-500">
          You have no products in your cart 🫤
        </p>
      ) : (
        cartProducts.map((product: IProduct) => (
          <ProductCart
            key={product.id}
            product={product}
            handleRemoveProduct={handleRemoveProduct}
          />
        ))
      )}
    </section>
  );
}
