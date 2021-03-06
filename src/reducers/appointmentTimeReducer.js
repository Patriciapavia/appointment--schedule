import {
	FETCH_DATA_REQUEST,
	FETCH_DATA_SUCCESS,
	FETCH_DATA_FAILURE,
} from '../constants/fetAppointmentConstant';

export const fetchDataReducer = (state = [], action) => {
	switch (action.type) {
		case FETCH_DATA_REQUEST:
			return { loading: true };
		case FETCH_DATA_SUCCESS:
			return { loading: false, datas: action.payload };
		case FETCH_DATA_FAILURE:
			return { loading: false, error: action.payload };
		default:
			return state;
	}
};
