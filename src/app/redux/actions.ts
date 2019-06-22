
export const SET_LOGIN_STATUS = 'SET_LOGIN_STATUS';
export const SET_jokes = 'SET_jokes';
export const SET_joke = 'SET_joke';

export const setLoginStatus = status => {
  return {
    type: SET_LOGIN_STATUS,
    status
  }
}

export const setjokes = jokes =>  {
  return {
    type: SET_jokes,
    jokes
  }
}

export const setjoke = joke =>  {
  return {
    type: SET_joke,
    joke
  }
}
