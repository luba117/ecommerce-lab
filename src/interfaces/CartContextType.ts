import type { Product } from "./Product";

export interface CartContextType {
    products: Product[],
    addToCartItem: (product: Product) => void,
    removeFromCart: (productId:string) => void,
    updateQty: (productId: string, qty: number) => void,
    clearCart: () => void,
    cartCount: number;
    cartTotal: number;
}