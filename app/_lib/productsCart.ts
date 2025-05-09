import { IProduct } from "../_types/Products";
import { getStorage, setStorage } from "./storage";

const cartKey = "cart"

export function addToCart(product: IProduct) {
    const existingCart = getStorage(cartKey) || [];

    const isProductInCart = existingCart.some((item: IProduct) => item.id === product.id)
    if (isProductInCart) {        
        return {
            message: "This product is already in the cart."
        }
    }

    const updatedCart = [...existingCart, product];
    setStorage("cart", updatedCart);

    return {
        message: "Product added!"
    }
}

export function getCart() {
    const existingCart = getStorage(cartKey) || []

    return existingCart;
}

export function removeFromCart(productId: number) {
    const existingCart = getStorage(cartKey) || []

    if (existingCart.length <= 0) {
        return {
            message: "Your cart is empty."
        }
    }

    const updatedCart = existingCart.filter((item: IProduct) => item.id !== productId);    
    setStorage(cartKey, updatedCart);

    return {
        message: "Product removed!"
    }
}
