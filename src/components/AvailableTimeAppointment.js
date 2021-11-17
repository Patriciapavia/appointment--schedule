import React, { useEffect } from 'react';
import { Paper, Button } from '@material-ui/core';
import { useParams } from 'react-router-dom';
import { FlexibleSpace } from '../utils/commonUtils';
import { useDispatch, useSelector } from 'react-redux';
import { ViewState, EditingState } from '@devexpress/dx-react-scheduler';
import {
	Scheduler,
	WeekView,
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
	const datas = appointmentLists.datas;

	useEffect(() => {
		dispatch(fetchDataAction());
	}, [dispatch]);

	const commitChanges = () => {};
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
				<ViewState defaultCurrentDate='2021-12-6' />
				<WeekView startDayHour={6} endDayHour={19} />
				<Appointments />
				<Toolbar flexibleSpaceComponent={FlexibleSpace} />
				<DateNavigator />
				<EditRecurrenceMenu />
				<AppointmentTooltip showCloseButton showDeleteButton showOpenButton />
				<AppointmentForm />
				<DragDropProvider />
			</Scheduler>
		</Paper>
	);
};

export default AvailableTimeAppointment;
