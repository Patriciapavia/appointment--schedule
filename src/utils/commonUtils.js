import React from 'react';
import TableCell from '@material-ui/core/TableCell';
import classNames from 'clsx';
import Typography from '@material-ui/core/Typography';
import ColorLens from '@material-ui/icons/ColorLens';
import {
	darken,
	fade,
	lighten,
} from '@material-ui/core/styles/colorManipulator';
import { withStyles } from '@material-ui/core/styles';

import {
	
	MonthView,
	Appointments,
	Toolbar,
	
} from '@devexpress/dx-react-scheduler-material-ui';

export const getBorder = (theme) =>
	`1px solid ${
		theme.palette.type === 'light'
			? lighten(fade(theme.palette.divider, 1), 0.88)
			: darken(fade(theme.palette.divider, 1), 0.68)
	}`;
export const styles = (theme) => ({
	cell: {
		color: '#78909C!important',
		position: 'relative',
		userSelect: 'none',
		verticalAlign: 'top',
		padding: 0,
		height: 100,
		borderLeft: getBorder(theme),
		'&:first-child': {
			borderLeft: 'none',
		},
		'&:last-child': {
			paddingRight: 0,
		},
		'tr:last-child &': {
			borderBottom: 'none',
		},
		'&:hover': {
			backgroundColor: 'white',
		},
		'&:focus': {
			backgroundColor: fade(theme.palette.primary.main, 0.15),
			outline: 0,
		},
	},
	content: {
		display: 'flex',
		justifyContent: 'center',
		width: '100%',
		height: '100%',
		position: 'absolute',
		alignItems: 'center',
	},
	text: {
		padding: '0.5em',
		textAlign: 'center',
	},
	sun: {
		color: '#FFEE58',
	},
	cloud: {
		color: '#90A4AE',
	},
	rain: {
		color: '#4FC3F7',
	},
	sunBack: {
		backgroundColor: '#FFFDE7',
	},
	cloudBack: {
		backgroundColor: '#ECEFF1',
	},
	rainBack: {
		backgroundColor: '#E1F5FE',
	},
	opacity: {
		opacity: '0.5',
	},
	appointment: {
		borderRadius: '10px',
		'&:hover': {
			opacity: 0.6,
		},
	},
	apptContent: {
		'&>div>div': {
			whiteSpace: 'normal !important',
			lineHeight: 1.2,
		},
	},
	flexibleSpace: {
		flex: 'none',
	},
	flexContainer: {
		display: 'flex',
		alignItems: 'center',
	},
	tooltipContent: {
		padding: theme.spacing(3, 1),
		paddingTop: 0,
		backgroundColor: theme.palette.background.paper,
		boxSizing: 'border-box',
		width: '400px',
	},
	tooltipText: {
		...theme.typography.body2,
		display: 'inline-block',
	},
	title: {
		...theme.typography.h6,
		color: theme.palette.text.secondary,
		fontWeight: theme.typography.fontWeightBold,
		overflow: 'hidden',
		textOverflow: 'ellipsis',
		whiteSpace: 'nowrap',
	},
	icon: {
		color: theme.palette.action.active,
		verticalAlign: 'middle',
	},
	circle: {
		width: theme.spacing(4.5),
		height: theme.spacing(4.5),
		verticalAlign: 'super',
	},
	textCenter: {
		textAlign: 'center',
	},
	dateAndTitle: {
		lineHeight: 1.1,
	},
	titleContainer: {
		paddingBottom: theme.spacing(2),
	},
	container: {
		paddingBottom: theme.spacing(1.5),
	},
});
export const DayScaleCell = (props) => (
	<MonthView.DayScaleCell
		{...props}
		style={{ textAlign: 'center', fontWeight: 'bold' }}
	/>
);

export const CellBase = React.memo(
	({
		classes,
		startDate,
		formatDate,
		otherMonth,
		
	}) => {
		const iconId = Math.abs(Math.floor(Math.sin(startDate.getDate()) * 10) % 3);
		const isFirstMonthDay = startDate.getDate() === 1;
		const formatOptions = isFirstMonthDay
			? { day: 'numeric', month: 'long' }
			: { day: 'numeric' };
		return (
			<TableCell
				tabIndex={0}
				className={classNames({
					[classes.cell]: true,
					[classes.rainBack]: iconId === 0,
					[classes.sunBack]: iconId === 1,
					[classes.cloudBack]: iconId === 2,
					[classes.opacity]: otherMonth,
				})}
			>
				
				<div className={classes.text}>
					{formatDate(startDate, formatOptions)}
				</div>
			</TableCell>
		);
	}
);



export const TimeTableCell = withStyles(styles, { name: 'Cell' })(CellBase);

export const Appointment = withStyles(styles, { name: 'Appointment' })(
	({ classes, ...restProps }) => (
		<Appointments.Appointment {...restProps} className={classes.appointment} />
	)
);

export const AppointmentContent = withStyles(styles, {
	name: 'AppointmentContent',
})(({ classes, ...restProps }) => (
	<Appointments.AppointmentContent
		{...restProps}
		className={classes.apptContent}
	/>
));

export const FlexibleSpace = withStyles(styles, { name: 'ToolbarRoot' })(
	({ classes, ...restProps }) => (
		<Toolbar.FlexibleSpace {...restProps} className={classes.flexibleSpace}>
			<div className={classes.flexContainer}>
				<ColorLens fontSize='large' htmlColor='#FF7043' />
				<Typography variant='h5' style={{ marginLeft: '10px' }}>
					ShiftCare
				</Typography>
			</div>
		</Toolbar.FlexibleSpace>
	)
);
