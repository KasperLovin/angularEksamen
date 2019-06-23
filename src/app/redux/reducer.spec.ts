import { reducer } from './reducer';
import { setLoginStatus, setjoke, setjokes } from './actions';


fdescribe('Reducer and Action tests', () => {
    const mockInitialState = {
        isLoggedIn: false,
        jokes: []
    };

    const getMockAction = (msg, payload) => ({
        type: msg,
        ...payload
    })

    it('Checks login status', () => {
        const mockAction = getMockAction('SET_LOGIN_STATUS', {status: true});
        const state = reducer(mockInitialState, mockAction);

        expect(state).toEqual({ ...mockInitialState, isLoggedIn: mockAction.status});
    })

    it('Set jokes action', () => {
        const jokes = [1, 2, 3];
        const mockAction = getMockAction('SET_jokes', { jokes })
        const state = reducer(mockInitialState, mockAction);

        expect(state).toEqual({ ...mockInitialState, jokes })
    });

    it('Set joke action', () => {
        const joke = [1, 2, 3];
        const mockAction = getMockAction('SET_joke', { joke })
        const state = reducer(mockInitialState, mockAction);

        expect(state).toEqual({ ...mockInitialState, currentjoke: joke })
    });

    it('Set default state', () => {
       const state = reducer(mockInitialState, {})

       expect(state).toEqual(mockInitialState)
    });

    it('Sets action creator login status', () => {
        const status = true;
        const action = setLoginStatus(status);

        expect(action).toEqual(getMockAction('SET_LOGIN_STATUS', { status }))
    });

    it('Sets action creator jokes', () => {
        const jokes = [];
        const action = setjokes(jokes);

        expect(action).toEqual(getMockAction('SET_jokes', { jokes }))
    });

    it('sets action creator joke', () => {
        const joke = [];
        const action = setjoke(joke);
        
        expect(action).toEqual(getMockAction('SET_joke', { joke }))
    });
});