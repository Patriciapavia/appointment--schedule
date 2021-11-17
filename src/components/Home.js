import React, { useEffect } from 'react';
import AvailableCoaches from './AvailableCoaches';
import { Container } from '@mui/material';
import { useDispatch, useSelector } from 'react-redux';
import { fetchDataAction } from '../actions/appointmentTimeAction';
import { appointmentDatas } from '../data/data';

console.log(appointmentDatas);

const Home = () => {
	const dispatch = useDispatch();
	const appointmentLists = useSelector((state) => state.appointmentLists);
	const datas = appointmentLists.datas;
	useEffect(() => {
		dispatch(fetchDataAction());
	}, [dispatch]);

	return (
		<Container maxWidth='sm'>
			<h1>Available Coaches</h1>
			{datas
				? datas.map((coach) => <AvailableCoaches coach={coach} />)
				: 'Loading'}
		</Container>
	);
};

export default Home;
