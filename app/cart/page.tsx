import {IProduct} from "@/app/_types/Products";

interface ICart {
    id: number,
    userId: number,
    products: [IProduct],
}

export default async function CartPage() {
    try {
        const response = await fetch('https://fakestoreapi.com/carts/1')
        const cart: ICart = await response.json()

        console.log(cart)
    } catch (e) {
        console.warn(`Failed to fetch cart: ${e}`)
    }

    return (
        <section>
            <p>Cart</p>


        </section>
    )
}