import React, { useContext } from 'react';
import { FamilyContext } from '../global/family';
import Table from '../components/Table/Table';

const ShippingScreen = () => {
	const { data } = useContext(FamilyContext);
	const names = data.map((person) => {
		return person.name;
	});
	console.log(data);
	return (
		<>
			<Table title="Family Members" labels={names} />
		</>
	);
};

export default ShippingScreen;
