import Link from "next/link";
import { ShoppingCart } from "lucide-react";
import IslandContainer from "./IslandContainer";

export default function Navigation() {
  return (
    <IslandContainer className="mt-3 mb-10">
      <header className="flex items-center justify-between">
        <p className="text-xl font-black">
          <Link href="/">🛒 Shoppy</Link>
        </p>

        <nav>
          <ul className="flex gap-4">
            <li>
              <Link
                href="/cart"
                className="text-indigo-500 hover:text-indigo-700 font-bold"
              >
                <span className="sr-only">Shopping Cart</span>
                <ShoppingCart />
              </Link>
            </li>
          </ul>
        </nav>
      </header>
    </IslandContainer>
  );
}
