import React from 'react';
import { Paper } from '@material-ui/core';
import { useParams } from 'react-router-dom';
import { FlexibleSpace } from '../utils/commonUtils';
import { useSelector } from 'react-redux';
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

const AvailableTimeAppointment = () => {
	const { id } = useParams();

	const appointmentLists = useSelector((state) => state.appointmentLists);
	const datas = appointmentLists.datas;

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
