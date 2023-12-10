import { useSearchParams } from 'react-router-dom';

const useSearchAdminDashBoard = () => {
	const [searchParams, setSearchParams] = useSearchParams();
	const query = {};

	let year = searchParams.get('year');


	if (year) query.year = year;
	

	const pushQuery = ({ year }) => {
		if (year !== undefined) {
			year === '' ? delete query.year : (query.year = year);

		const newQuery = new URLSearchParams(query).toString();
		setSearchParams(newQuery);
	};
}
	return { pushQuery, query };
};

export default useSearchAdminDashBoard;
