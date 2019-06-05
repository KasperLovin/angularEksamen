import { IAppState } from '../interfaces';
import { SET_LOGIN_STATUS, SET_PRODUCTS, SET_PRODUCT } from './actions';

const INITIAL_STATE: IAppState = {isLoggedIn: false, products: []}

export const reducer = (state = INITIAL_STATE, action:any) => {
    switch(action.type)
    {
        case SET_LOGIN_STATUS:
            return {
                ...state,
                isLoggedIn: action.status
            }
        case SET_PRODUCTS:
            return {
                ...state,
                products: action.products
            }
        case SET_PRODUCT:
            return {
                ...state,
                currentProduct: action.product
            }

        default:
                return state;
    }
};