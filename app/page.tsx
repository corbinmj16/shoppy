import Image from "next/image";
import Link from "next/link";
import {IProduct} from "@/app/_types/Products";

export default async function Home() {
  const data = await fetch('https://fakestoreapi.com/products')
  const products: [IProduct] = await data.json();

  return (
    <section className="space-y-10 mt-10">
      <h2 className="text-3xl font-bold">Products</h2>

      <div className="space-y-4">
        <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {products.map((product: IProduct) => (
              <li key={product.id} className="flex flex-col gap-10 bg-white shadow-sm rounded-lg p-3">
                <Image src={product.image} alt={product.title} width={200} height={200} style={{objectFit: "contain", objectPosition: "center"}} className="mx-auto h-40 w-auto" />

                <div className="space-y-5">
                  <h2 className="font-mono text-lg font-bold line-clamp-2">
                    <abbr title={product.title}>
                      {product.title}
                    </abbr>
                  </h2>
                  <div className="flex justify-between">
                    <p className="text-lg">${product.price}</p>
                    <div className="flex flex-col">
                      <p className="text-sm text-amber-400 font-bold">{product.rating.rate} Rating</p>
                      <p className="text-sm">{product.rating.count} Reviews</p>
                    </div>
                  </div>
                  <p className="text-gray-500 line-clamp-3">{product.description}</p>
                </div>

                <div className="mt-auto flex gap-5 self-end">
                  <Link href={`product/${product.id}`} className="text-indigo-500 font-bold hover:text-indigo-700 hover:cursor-pointer">View</Link>
                  <button className="bg-indigo-500 hover:bg-indigo-700 hover:cursor-pointer text-white font-bold rounded-full py-1 px-2.5">Add to Cart</button>
                </div>
              </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
