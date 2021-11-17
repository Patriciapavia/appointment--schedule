import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';
import { fetchDataReducer } from './reducers/appointmentTimeReducer';

const reducer = combineReducers({
	appointmentLists: fetchDataReducer,
});

const appointmentDataFromStorage = localStorage.getItem('appointmentDatas')
	? JSON.parse(localStorage.getItem('appointmentDatas'))
	: null;

const initialState = {
	appointmentDatas: { data: appointmentDataFromStorage },
};


const middleware = [thunk];

const store = createStore(
	reducer,
	initialState,
	composeWithDevTools(applyMiddleware(...middleware))
);

export default store;
