import { useSearchParams } from 'react-router-dom';

const useSearchResume = () => {
	const [searchParams, setSearchParams] = useSearchParams();
	const query = {};
	let keyword = searchParams.get('keyword');
	let toDate = searchParams.get('toDate');
	let fromDate = searchParams.get('fromDate');
	let resume_active = searchParams.get('resume_active');

	if (keyword) query.keyword = keyword;
	if (toDate) query.toDate = toDate;
	if (fromDate) query.fromDate = fromDate;
	if (resume_active) query.resume_active = resume_active;

	const pushQuery = ({ keyword, toDate, fromDate, resume_active }) => {
		if (keyword !== undefined) {
			keyword === '' ? delete query.keyword : (query.keyword = keyword);
		}

		if (toDate !== undefined) {
			toDate === '' ? delete query.toDate : (query.toDate = toDate);
		}

		if (fromDate !== undefined) {
			fromDate === '' ? delete query.fromDate : (query.fromDate = fromDate);
		}

		if (resume_active !== undefined) {
			resume_active === '' ? delete query.resume_active : (query.resume_active = resume_active);
		}

		const newQuery = new URLSearchParams(query).toString();
		setSearchParams(newQuery);
	};
	return { pushQuery, query };
};

export default useSearchResume;
