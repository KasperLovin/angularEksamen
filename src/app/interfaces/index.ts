export interface IAppState {
    isLoggedIn: boolean;
    jokes: Ijokes[];
}

export interface Ijokes {
    key: string;
    id: number;
    title: string;
    price: number;
    category: string;
    imageUrl: string;
}

