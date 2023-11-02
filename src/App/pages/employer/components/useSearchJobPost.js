import { useSearchParams } from 'react-router-dom';

const useSearchJobPost = () => {
	const [searchParams, setSearchParams] = useSearchParams();
	const query = {};
	let keyword = searchParams.get('keyword');
	let dateType = searchParams.get('dateType');
	let fromDate = searchParams.get('fromDate');
	let toDate = searchParams.get('toDate');

	if (keyword) query.keyword = keyword;
	if (dateType) query.dateType = dateType;
	if (fromDate) query.fromDate = fromDate;
	if (toDate) query.toDate = toDate;

	const pushQuery = ({ keyword, dateType, fromDate, toDate }) => {
		if (keyword !== undefined) {
			keyword === '' ? delete query.keyword : (query.keyword = keyword);
		}
		if (dateType !== undefined) {
			dateType === '' ? delete query.dateType : (query.dateType = dateType);
		}
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

export default useSearchJobPost;
