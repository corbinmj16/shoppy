import ProductCard from "@/app/_components/ProductCard";
import {IProduct} from "@/app/_types/Products";

async function getProducts() {
    try {
        const data = await fetch('https://fakestoreapi.com/products')

        if (!data.ok) {
            return {
                products: null,
                error: 'Failed to fetch products.',
            }
        }

        const products: [IProduct] = await data.json();
        return {
            products,
            error: null
        };
    } catch (e) {
        const errorResponse = {
            products: null,
            error: 'Failed to fetch products.',
        }

        if (e instanceof Error) {
            return {
                ...errorResponse,
                error: `Failed to fetch products: ${e.message}`,
            }
        } else {
            return errorResponse
        }
    }
}

export default async function Home() {
    const {products, error} = await getProducts();

    if (error) {
        return <h2>{error}</h2>
    }

    return (
        <section className="space-y-10 mt-10">
            <h2 className="text-3xl font-bold">Products</h2>

            <div className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {products?.map((product: IProduct) => (
                        <ProductCard key={product.id} product={product}/>
                    ))}
                </div>
            </div>
        </section>
    );
}
