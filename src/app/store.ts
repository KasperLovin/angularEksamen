
import { AppProduct } from 'src/app/models/app-product';
import { count } from 'rxjs/operators';
import { tassign} from 'tassign';
import { combineReducers } from 'redux';
import { IAppState } from './interfaces';
import { reducer } from './redux/reducer';


export const initialState: IAppState = {
    isLoggedIn: false,
    products: [],
};