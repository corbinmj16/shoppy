import { IProduct, IProductsResponse } from "@/app/_types/Products";
import Products from "./_components/Products";

async function getProducts() {
  try {
    const data = await fetch("https://fakestoreapi.in/api/products");

    if (!data.ok) {
      return {
        products: null,
        error: "Failed to fetch products. Try refreshing the page.",
      };
    }

    const response: IProductsResponse = await data.json();
    const products: IProduct[] = response.products;

    return {
      products: products.splice(0, 8),
      error: null,
    };
  } catch (e) {
    const errorResponse = {
      products: null,
      error: "Failed to fetch products.",
    };

    if (e instanceof Error) {
      return {
        ...errorResponse,
        error: `Failed to fetch products: ${e.message}`,
      };
    } else {
      return errorResponse;
    }
  }
}

export default async function Home() {
  const { products, error } = await getProducts();

  if (error) {
    return <h2>{error}</h2>;
  }

  return (
    <section className="space-y-10 mt-10">
      <div>
        <h2 className="text-3xl font-bold">Shoppy our latest items</h2>
        <p className="text-zinc-500 text-lg">Fresh hot-out-the-oven deals</p>
      </div>

      <Products products={products!} />
    </section>
  );
}
