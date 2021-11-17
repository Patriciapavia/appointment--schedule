import React, { useEffect } from 'react';
import Paper from '@material-ui/core/Paper';
import { useParams } from 'react-router-dom';
import {
	DayScaleCell,
	
	TimeTableCell,
	FlexibleSpace,
	AppointmentContent,
	Appointment,
} from '../utils/commonUtils';
import { useDispatch, useSelector } from 'react-redux';
import { ViewState, EditingState } from '@devexpress/dx-react-scheduler';
import {
	Scheduler,
	MonthView,
	Appointments,
	Toolbar,
	DateNavigator,
	AppointmentTooltip,
	AppointmentForm,
	EditRecurrenceMenu,
	DragDropProvider,
} from '@devexpress/dx-react-scheduler-material-ui';

import { fetchDataAction } from '../actions/appointmentTimeAction';

const AvailableTimeAppointment = () => {
	const { id } = useParams();
	const dispatch = useDispatch();
	const appointmentLists = useSelector((state) => state.appointmentLists);
	const datas = appointmentLists.datas

	useEffect(() => {
		dispatch(fetchDataAction());
	}, [dispatch]);

	
	const commitChanges = () => {};

	// const commitChanges = ({ added, changed, deleted }) => {
	// 	if (added) {
	// 		const startingAddedId =
	// 			data.length > 0 ? data[data.length - 1].id + 1 : 0;
	// 		setdata = [...data, { id: startingAddedId, ...added }];
	// 	}
	// 	if (changed) {
	// 		data = data.map((appointment) =>
	// 			changed[appointment.id]
	// 				? { ...appointment, ...changed[appointment.id] }
	// 				: appointment
	// 		);
	// 	}
	// 	if (deleted !== undefined) {
	// 		data = data.filter((appointment) => appointment.id !== deleted);
	// 	}
	// 	return { data };
	// };

	let newData = [];
	for (let i = 0; i < datas.length; ++i) {
		const d = datas[i];
		if (d.id === parseInt(id)) {
			newData.push(d);
		}
	}
	return (
		<Paper>
			<Scheduler data={newData}>
				<EditingState onCommitChanges={commitChanges} />
				<ViewState defaultCurrentDate='2021-12-1' />

				<MonthView
					timeTableCellComponent={TimeTableCell}
					dayScaleCellComponent={DayScaleCell}
				/>

				<Appointments
					appointmentComponent={Appointment}
					appointmentContentComponent={AppointmentContent}
				/>
			
				<Toolbar flexibleSpaceComponent={FlexibleSpace} />
				<DateNavigator />

				<EditRecurrenceMenu />
				<AppointmentTooltip
					// showCloseButton
					// showDeleteButton
					showOpenButton
				/>
				<AppointmentForm />
				<DragDropProvider />
			</Scheduler>
		</Paper>
	);
};

export default AvailableTimeAppointment;
