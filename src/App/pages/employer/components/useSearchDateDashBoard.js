import { useSearchParams } from 'react-router-dom';

const useSearchDateDashBoard = () => {
	const [searchParams, setSearchParams] = useSearchParams();
	const query = {};

	let startDate_1 = searchParams.get('startDate_1');
	let endDate_1 = searchParams.get('endDate_1');
	let startDate_2 = searchParams.get('startDate_2');
	let endDate_2 = searchParams.get('endDate_2');
	let startDate_3 = searchParams.get('startDate_3');
	let endDate_3 = searchParams.get('endDate_3');
	let startDate_4 = searchParams.get('startDate_4');
	let endDate_4 = searchParams.get('endDate_4');

	if (startDate_1) query.startDate_1 = startDate_1;
	if (endDate_1) query.endDate_1 = endDate_1;
	if (startDate_2) query.startDate_2 = startDate_2;
	if (endDate_2) query.endDate_2 = endDate_2;
	if (startDate_3) query.startDate_3 = startDate_3;
	if (endDate_3) query.endDate_3 = endDate_3;

	const pushQuery = ({ startDate_1, endDate_1, startDate_2, endDate_2, startDate_3, endDate_3 }) => {
		if (startDate_1 !== undefined) {
			startDate_1 === '' ? delete query.startDate_1 : (query.startDate_1 = startDate_1);
		}
		if (endDate_1 !== undefined) {
			endDate_1 === '' ? delete query.endDate_1 : (query.endDate_1 = endDate_1);
		}
		if (startDate_2 !== undefined) {
			startDate_2 === '' ? delete query.startDate_2 : (query.startDate_2 = startDate_2);
		}
		if (endDate_2 !== undefined) {
			endDate_2 === '' ? delete query.endDate_2 : (query.endDate_2 = endDate_2);
		}
		if (startDate_3 !== undefined) {
			startDate_3 === '' ? delete query.startDate_3 : (query.startDate_3 = startDate_3);
		}
		if (endDate_3 !== undefined) {
			endDate_3 === '' ? delete query.endDate_3 : (query.endDate_3 = endDate_3);
		}

		const newQuery = new URLSearchParams(query).toString();
		setSearchParams(newQuery);
	};
	return { pushQuery, query };
};

export default useSearchDateDashBoard;
