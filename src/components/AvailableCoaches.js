import React from 'react';
import { Link } from 'react-router-dom';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';

const AvailableCoaches = ({ coach }) => {
	return (
		<>
			<List>
				<ListItem>
					<Link to={`/avaiable-schedule/${coach.id}`}>{coach.title}</Link>
				</ListItem>
			</List>
		</>
	);
};

export default AvailableCoaches;
