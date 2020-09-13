import axios from 'axios';

const url = 'https://beamtech.github.io/boxing-kata-js/perks.json';

export const fetchData = async () => {
	try {
		const { data } = await axios.get(url);
		// let modifiedData = data.map((obj) => ({ ...obj, isActive: true }));
		// return modifiedData;
		console.log(data);
		return data;
	} catch (error) {
		console.log(error);
	}
};