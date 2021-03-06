import {
    FETCH_SURVEYS
  } from '../actions/types';
import { handleActions } from 'redux-actions';
  
const formInitialState = {
    surveys : []
}

export default handleActions({
    [FETCH_SURVEYS] : (state, action) => {
        return {
            surveys : action.payload
        }
    }
}, formInitialState)
  