import { useSearchParams } from 'react-router-dom';

const useSearchOrder = () => {
	const [searchParams, setSearchParams] = useSearchParams();
	const query = {};
	let fromDate = searchParams.get('fromDate');
	let toDate = searchParams.get('toDate');

	if (fromDate) query.fromDate = fromDate;
	if (toDate) query.toDate = toDate;

	const pushQuery = ({ fromDate, toDate }) => {
		if (fromDate !== undefined) {
			fromDate === '' ? delete query.fromDate : (query.fromDate = fromDate);
		}

		if (toDate !== undefined) {
			toDate === '' ? delete query.toDate : (query.toDate = toDate);
		}

		const newQuery = new URLSearchParams(query).toString();
		setSearchParams(newQuery);
	};
	return { pushQuery, query };
};

export default useSearchOrder;
