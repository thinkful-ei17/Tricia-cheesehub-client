import fetchCheesesReducer from './reducers/cheese';
import {createStore, applyMiddleware} from 'redux';
import thunk from 'redux-thunk';



export default createStore(fetchCheesesReducer, applyMiddleware(thunk));
