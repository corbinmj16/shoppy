import {IProduct} from "@/app/_types/Products";
import Image from "next/image";
import Link from "next/link";

export default function ProductCard(props: { product: IProduct }) {
    return <article className="flex flex-col gap-10 bg-white shadow-sm rounded-lg p-3">
        <Image src={props.product.image} alt={props.product.title} width={200} height={200}
               style={{objectFit: "contain", objectPosition: "center"}}
               className="mx-auto h-40 w-auto"/>

        <div className="space-y-5">
            <h2 className="font-mono text-lg font-bold line-clamp-2">
                <abbr title={props.product.title}>
                    {props.product.title}
                </abbr>
            </h2>
            <div className="flex justify-between">
                <p className="text-lg">${props.product.price}</p>
                <div className="flex flex-col">
                    <p className="text-sm text-amber-400 font-bold">{props.product.rating.rate} Rating</p>
                    <p className="text-sm">{props.product.rating.count} Reviews</p>
                </div>
            </div>
            <p className="text-gray-500 line-clamp-3">{props.product.description}</p>
        </div>

        <div className="mt-auto flex gap-5 self-end items-center">
            <Link href={`product/${props.product.id}`}
                  className="text-indigo-500 font-bold hover:text-indigo-700 hover:cursor-pointer">View</Link>
            <button
                className="bg-indigo-500 hover:bg-indigo-700 hover:cursor-pointer text-white font-bold rounded-full py-1 px-2.5">Add
                to Cart
            </button>
        </div>
    </article>;
}