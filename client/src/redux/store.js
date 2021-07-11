import { applyMiddleware, createStore } from 'redux';
import thunk from 'redux-thunk'
import activeUserReducer from './reducers/activeUserReducer';

const middleware = [thunk];
const store = createStore(activeUserReducer,applyMiddleware(...middleware));

export default store;