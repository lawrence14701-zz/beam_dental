import React, { useContext, useEffect, useState } from 'react';
import { FamilyContext } from '../../global/family';
import Table from '../../components/Table/Table';
import Button from '../../components/Button/Button';
import Spinner from '../../components/Spinner/Spinner';
import Tabs from '../../components/Tabs/Tabs';
import Refill from './Refill'
import Starter from './Starter'

const ShippingScreen = () => {
	const { data, dispatch } = useContext(FamilyContext);
	const [loading, setLoading] = useState(false);
	console.log(data);
	useEffect(() => {
		if (data.length === 0) {
			console.log('loading');
		} else {
			const timer = setTimeout(() => {
				setLoading(true);
			}, 2000);
			return () => clearTimeout(timer);
		}
	}, [data]);

	const tableData = {
		columns: [
			{ title: 'ID', field: 'id' },
			{ title: 'Name', field: 'name' },
			{ title: 'Brush Color', field: 'brush_color', type: 'string' },
		],
		data: data.familyMembers,
	};

	const actionOne = { node: <Button color="primary">Starter</Button>, name: 'add starter' };
	const actionTwo = { node: <Button color="secondary">Refill</Button>, name: 'add refill' };

	return (
		<>
			{!loading ? (
				<Spinner />
			) : (
				<div>
					<Table title="Family Members" data={tableData} actionOne={actionOne} actionTwo={actionTwo} dispatch={dispatch} />
					<Tabs tabs={{ 'Starter Boxes': <Starter/>, 'Refill Boxes': <Refill/> }} />
				</div>
			)}
		</>
	);
};

export default ShippingScreen;
