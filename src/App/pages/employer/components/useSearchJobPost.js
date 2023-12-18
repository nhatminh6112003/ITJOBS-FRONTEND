import { useSearchParams } from 'react-router-dom';

const useSearchJobPost = () => {
	const [searchParams, setSearchParams] = useSearchParams();
	const query = {};
	let keyword = searchParams.get('keyword');
	let dateType = searchParams.get('dateType');
	let fromDate = searchParams.get('fromDate');
	let toDate = searchParams.get('toDate');
	let provinces = searchParams.get('provinces');
	let profession_id = searchParams.get('profession_id');
	let salary = searchParams.get('salary');
	let days = searchParams.get('days');
	let job_position_value = searchParams.get('job_position_value');
	if (keyword) query.keyword = keyword;
	if (dateType) query.dateType = dateType;
	if (fromDate) query.fromDate = fromDate;
	if (toDate) query.toDate = toDate;
	if (provinces) query.provinces = provinces;
	if (profession_id) query.profession_id = profession_id;
	if (salary) query.salary = salary;
	if (days) query.days = days;
	if (job_position_value) query.job_position_value = job_position_value;
	const pushQuery = ({
		keyword,
		dateType,
		fromDate,
		toDate,
		provinces,
		profession_id,
		days,
		salary,
		job_position_value
	}) => {
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
		if (provinces !== undefined) {
			provinces === '' ? delete query.provinces : (query.provinces = provinces);
		}
		if (profession_id !== undefined) {
			profession_id === '' ? delete query.profession_id : (query.profession_id = profession_id);
		}
		if (salary !== undefined) {
			salary === '' ? delete query.salary : (query.salary = salary);
		}
		if (days !== undefined) {
			days === '' ? delete query.days : (query.days = days);
		}
		if (job_position_value !== undefined) {
			job_position_value === '' ? delete query.job_position_value : (query.job_position_value = job_position_value);
		}
		const newQuery = new URLSearchParams(query).toString();
		setSearchParams(newQuery);
	};
	return { pushQuery, query };
};

export default useSearchJobPost;
