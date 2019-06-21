import { SET_LOGIN_STATUS } from "./actions";
import { reducer } from './reducer';
import { setLoginStatus, setProduct, setProducts } from './actions';


fdescribe('reducer tests', () => {
    const mockInitialState = {
        isLoggedIn: false,
        products: []
    };

    const getMockAction = (msg, payload) => ({
        type: msg,
        ...payload
    })

    it('checks login status', () => {
        const mockAction = getMockAction('SET_LOGIN_STATUS', {status: true});
        const state = reducer(mockInitialState, mockAction);

        expect(state).toEqual({ ...mockInitialState, isLoggedIn: mockAction.status});
    })

    it('set products action', () => {
        const products = [1, 2, 3];
        const mockAction = getMockAction('SET_PRODUCTS', { products })
        const state = reducer(mockInitialState, mockAction);

        expect(state).toEqual({ ...mockInitialState, products })
    });

    it('set products action', () => {
        const product = [1, 2, 3];
        const mockAction = getMockAction('SET_PRODUCT', { product })
        const state = reducer(mockInitialState, mockAction);

        expect(state).toEqual({ ...mockInitialState, currentProduct: product })
    });

    it('set default state', () => {
       const state = reducer(mockInitialState, {})

       expect(state).toEqual(mockInitialState)
    });

    it('sets action creator login status', () => {
        const status = true;
        const action = setLoginStatus(status);

        expect(action).toEqual(getMockAction('SET_LOGIN_STATUS', { status }))
    });

    it('sets action creator products', () => {
        const products = [];
        const action = setProducts(products);

        expect(action).toEqual(getMockAction('SET_PRODUCTS', { products }))
    });

    it('sets action creator product', () => {
        const product = [];
        const action = setProduct(product);
        
        expect(action).toEqual(getMockAction('SET_PRODUCT', { product }))
    });
});