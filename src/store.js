import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';
import { fetchDataReducer } from './reducers/appointmentTimeReducer';

const reducer = combineReducers({
	appointmentLists: fetchDataReducer,
});

const middleware = [thunk];

const store = createStore(
	reducer,
	composeWithDevTools(applyMiddleware(...middleware))
);

export default store;
