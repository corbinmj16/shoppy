import Link from "next/link";

export default function Navigation() {
    return (
        <header className="flex items-center justify-between px-6 py-4 mt-3 mb-10 bg-white rounded-full shadow-sm">
            <p className="text-xl font-black">🛒 Shoppy</p>

            <nav>
                <ul className="flex gap-4">
                    <li>
                        <Link href="/" className="text-indigo-400 hover:text-indigo-600 font-bold">
                            Products
                        </Link>
                    </li>
                    <li>
                        <Link href="/cart" className="text-indigo-400 hover:text-indigo-600 font-bold">
                            Cart
                        </Link>
                    </li>
                </ul>
            </nav>
        </header>
    )
}