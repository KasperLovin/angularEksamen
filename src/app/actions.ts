
/*
import { NgRedux } from '@angular-redux/store';
import { IAppState } from './store';
import { Injectable } from '@angular/core';

@Injectable({ providedIn: 'root'})
export class Actions {

    constructor(private ngRedux: NgRedux<IAppState>) 
    {
        
    }
    static LOG_IN: string = 'LOG_IN'; 

    setLoggedIn(isLoggedIn: boolean): void 
    {
        console.log(isLoggedIn);
        
        this.ngRedux.dispatch(
        {
          type: Actions.LOG_IN,
          payload: isLoggedIn
        })
    
      }

}

*/
