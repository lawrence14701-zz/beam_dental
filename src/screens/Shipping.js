import React, { useContext, useEffect, useState } from 'react';
import { FamilyContext } from '../global/family';
import Table from '../components/Table/Table';
import Button from '../components/Button/Button';
import Spinner from '../components/Spinner/Spinner';

const ShippingScreen = () => {
	const { data } = useContext(FamilyContext);
	const [loading, setLoading] = useState(false);

	useEffect(() => {
		if (data.length === 0) {
			console.log('loading');
		} else {
			const timer = setTimeout(() => {
				setLoading(true);
			}, 1000);
			return () => clearTimeout(timer);
		}
	}, [data]);
	const tableData = {
		columns: [
			{ title: 'Name', field: 'name' },
			{ title: 'Brush Color', field: 'brush_color', type: 'string' },
		],
		data: data,
	};
	const actionOne = { node: <Button color="primary">Starter</Button>, name: 'add starter' };
	const actionTwo = { node: <Button color="secondary">Refill</Button>, name: 'add refill' };
	return (
		<>
			{!loading ? (
				<Spinner />
			) : (
				<Table title="Family Members" data={tableData} actionOne={actionOne} actionTwo={actionTwo} />
			)}
		</>
	);
};

export default ShippingScreen;
