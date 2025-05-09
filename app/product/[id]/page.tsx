import ButtonAddToCart from "@/app/_components/ButtonAddToCart";
import { IProduct } from "@/app/_types/Products";
import Image from "next/image";

export default async function ProductPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;

  const data = await fetch(`https://fakestoreapi.com/products/${id}`);
  const product: IProduct = await data.json();

  return (
    <section className="grid grid-cols-1 md:grid-cols-2 gap-4">
      <Image
        src={product.image}
        alt={product.title}
        width={400}
        height={400}
      />

      <div className="space-y-5">
        <h1 className="font-mono font-bold text-3xl">{product.title}</h1>
        <div className="flex flex-col">
          <p className="text-sm text-amber-400 font-bold">
            {product.rating.rate} Rating
          </p>
          <p className="text-sm">{product.rating.count} Reviews</p>
        </div>
        <p className="text-gray-500">{product.description}</p>

        <ButtonAddToCart product={product} />
      </div>
    </section>
  );
}
