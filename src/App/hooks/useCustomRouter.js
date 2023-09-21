import { useSearchParams } from 'react-router-dom';

const useCustomRouter = () => {
	const [searchParams, setSearchParams] = useSearchParams();
	const query = {};
	let keyword = searchParams.get('keyword');
	let page = searchParams.get('page');

	if (keyword) query.keyword = keyword;
	if (page) query.page = page;

	const pushQuery = ({ keyword, page }) => {
		if (keyword !== undefined) {
			keyword === '' ? delete query.keyword : (query.keyword = keyword);
		}
		if (page !== undefined) {
			page === '' ? delete query.page : (query.page = page);
		}
		const newQuery = new URLSearchParams(query).toString();
		console.log("🚀 ~ file: useCustomRouter.js:20 ~ pushQuery ~ newQuery:", newQuery)
		setSearchParams(newQuery);
	};
	return { pushQuery, query };
};

export default useCustomRouter;
