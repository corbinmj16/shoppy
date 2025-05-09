"use client";

import { useState } from "react";
import { addToCart } from "@/app/_lib/productsCart";
import { IProduct } from "../_types/Products";

export default function ButtonAddToCart({ product }: { product: IProduct }) {
  const [message, setMessage] = useState("");

  function handleAddToCart(product: IProduct) {
    const { message } = addToCart(product);
    setMessage(message);

    setTimeout(() => {
      setMessage("");
    }, 2000);
  }

  return (
    <button
      type="button"
      onClick={() => handleAddToCart(product)}
      className="bg-indigo-500 hover:bg-indigo-700 hover:cursor-pointer text-white font-bold rounded-full py-1 px-2.5"
    >
      {message ? message : "Add to cart"}
    </button>
  );
}
