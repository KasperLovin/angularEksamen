import { SET_LOGIN_STATUS } from "./actions";
import { reducer } from './reducer';

//var deepFreeze = require('deep-freeze')

describe('reducer tests', () => {

    it('Checks for true if logged in', () => {
        let initstate = {isLoggedIn: false, products: []};
        //deepFreeze(initstate)
        let actionObj = {
            type: SET_LOGIN_STATUS,
            payload: true
        };
        let newStateObj = reducer(initstate, actionObj);
        expect(newStateObj).toEqual({isLoggedIn: true, products: []});
    });
});