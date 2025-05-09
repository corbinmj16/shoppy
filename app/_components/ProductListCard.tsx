import { IProduct } from "@/app/_types/Products";
import Image from "next/image";
import Link from "next/link";
import ButtonAddToCart from "./ButtonAddToCart";

export default function ProductCard({ product }: { product: IProduct }) {
  return (
    <article className="grid grid-cols-1 md:grid-cols-3 gap-10 bg-white shadow-sm rounded-lg p-3">
      <Image
        src={product.image}
        alt={product.title}
        width={150}
        height={150}
        style={{ objectFit: "contain", objectPosition: "center" }}
        className="mx-auto w-40 h-40 col-span-1 self-center"
      />

      <div className="space-y-5 col-span-2">
        <h2 className="font-mono text-lg font-bold line-clamp-2 col-span-2">
          <abbr title={product.title}>{product.title}</abbr>
        </h2>

        <div className="flex justify-between items-center">
          <p className="text-lg">${product.price}</p>

          <div className="flex flex-col">
            <p className="text-sm text-amber-400 font-bold">
              {product.rating.rate} Rating
            </p>
            <p className="text-sm">{product.rating.count} Reviews</p>
          </div>
        </div>

        <p className="text-gray-500 line-clamp-3">{product.description}</p>

        <div className="flex justify-between items-center mt-10 gap-5">
          <div className="flex gap-4 items-center self-end">
            <Link
              href={`product/${product.id}`}
              className="text-indigo-500 font-bold hover:text-indigo-700 hover:cursor-pointer"
            >
              View
            </Link>
            <ButtonAddToCart product={product} />
          </div>
        </div>
      </div>
    </article>
  );
}
