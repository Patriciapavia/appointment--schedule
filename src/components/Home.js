import React, { useEffect } from 'react';
import AvailableCoaches from './AvailableCoaches';
import { Container } from '@mui/material';
import { useDispatch, useSelector } from 'react-redux';
import { fetchDataAction } from '../actions/appointmentTimeAction';

const Home = () => {
	const dispatch = useDispatch();
	const appointmentLists = useSelector((state) => state.appointmentLists);
	const datas = appointmentLists.datas;

	let coachLists = [];
	if (datas) {
		datas.filter(function (item) {
			let i = coachLists.findIndex(
				(x) => x.title === item.title && x.id === item.id
			);
			if (i <= -1) {
				coachLists.push(item);
			}
			return null;
		});
	}

	useEffect(() => {
		dispatch(fetchDataAction());
	}, [dispatch]);

	return (
		<Container maxWidth='sm'>
			<h1>Available Coaches</h1>
			{coachLists
				? coachLists.map((coach) => <AvailableCoaches coach={coach} />)
				: 'Loading'}
		</Container>
	);
};

export default Home;
