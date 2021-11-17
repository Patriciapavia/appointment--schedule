import { FETCH_DATA_SUCCESS } from '../constants/fetAppointmentConstant';
import { appointmentDatas } from '../data/data';

export const fetchDataAction = () => (dispatch) => {
	dispatch({
		type: FETCH_DATA_SUCCESS,
		payload: appointmentDatas,
	});
	 localStorage.setItem('appointmentDatas', JSON.stringify(appointmentDatas));

};
