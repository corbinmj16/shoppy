export interface IProduct {
    id: number;
    title: string;
    price: number;
    description: string;
    category: string;
    image: string;
}

export interface IProductsResponse {
    status: string;
    message: string;
    products: IProduct[];
}

export type ProductViewOptions = "grid" | "list"