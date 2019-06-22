import { IAppState } from '../interfaces';
import { SET_LOGIN_STATUS, SET_jokes, SET_joke } from './actions';

const INITIAL_STATE: IAppState = {isLoggedIn: false, jokes: []}

export const reducer = (state = INITIAL_STATE, action:any) => {
    switch(action.type)
    {
        case SET_LOGIN_STATUS:
            return {
                ...state,
                isLoggedIn: action.status
            }
        case SET_jokes:
            return {
                ...state,
                jokes: action.jokes
            }
        case SET_joke:
            return {
                ...state,
                currentjoke: action.joke
            }

        default:
                return state;
    }
};