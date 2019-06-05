export interface IAppState {
    isLoggedIn: boolean;
    products: Iproducts[];
}

export interface Iproducts {
    key: string;
    id: number;
    title: string;
    price: number;
    category: string;
    imageUrl: string;
}