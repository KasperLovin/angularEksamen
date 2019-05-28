/*
import { IAppState } from './store';
import { tassign } from 'tassign';
import { Actions } from './actions';
const INITIAL_STATE: IAppState = {isLoggedIn: false, products: []}

export function reducer(state: IAppState = INITIAL_STATE, action:any)
{
    switch(action.type)
    {
        case Actions.LOG_IN:
            console.log(action);
            return tassign(state, {isLoggedIn: action.payload});

        default:
                return state;
    }


}
*/