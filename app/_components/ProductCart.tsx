import Image from "next/image";
import { IProduct } from "../_types/Products";
import { X } from "lucide-react";

export default function ProductCart({
  product,
  handleRemoveProduct,
}: {
  product: IProduct;
  handleRemoveProduct: (productId: number) => void;
}) {
  return (
    <article className="grid grid-cols-3 gap-4 bg-white shadow-sm rounded-lg p-3">
      <Image
        src={product.image}
        alt={product.title}
        width={120}
        height={120}
        className="w-30 h-30 object-contain object-center col-span-1"
      />

      <div className="col-span-2 flex flex-col gap-2">
        <button
          type="button"
          onClick={() => handleRemoveProduct(product.id)}
          className="self-end text-red-500 hover:text-red-700 hover:cursor-pointer"
        >
          <span className="sr-only">Remove</span>
          <X />
        </button>
        <h2 className="font-mono text-lg font-bold">{product.title}</h2>
        <p>${product.price}</p>
      </div>
    </article>
  );
}
