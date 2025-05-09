import { IProduct } from "@/app/_types/Products";
import Image from "next/image";
import Link from "next/link";

import ButtonAddToCart from "./ButtonAddToCart";

export default function ProductCard({ product }: { product: IProduct }) {
  return (
    <article className="flex flex-col gap-10 bg-white shadow-sm rounded-lg p-3">
      <Image
        src={product.image}
        alt={product.title}
        width={200}
        height={200}
        style={{ objectFit: "contain", objectPosition: "center" }}
        className="mx-auto h-40 w-auto"
      />

      <div className="space-y-5">
        <h2 className="font-mono text-lg font-bold line-clamp-2">
          <abbr title={product.title}>{product.title}</abbr>
        </h2>
        <div className="flex justify-between">
          <p className="text-lg">${product.price}</p>
          {/* <div className="flex flex-col text-center">
            <p className="text-sm text-amber-400 font-bold">
              {product.rating.rate} / 5
            </p>
            <p className="text-sm">{product.rating.count} Reviews</p>
          </div> */}
        </div>
        <p className="text-gray-500 line-clamp-3">{product.description}</p>
      </div>

      <div className="flex flex-col mt-auto">
        <div className="mt-auto flex gap-5 self-end items-center relative">
          <Link
            href={`product/${product.id}`}
            className="text-indigo-500 font-bold hover:text-indigo-700 hover:cursor-pointer"
          >
            View
          </Link>
          <ButtonAddToCart product={product} />
        </div>
      </div>
    </article>
  );
}
