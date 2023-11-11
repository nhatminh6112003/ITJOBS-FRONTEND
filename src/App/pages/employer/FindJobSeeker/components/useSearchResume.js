import { useSearchParams } from 'react-router-dom';

const useSearchResume = () => {
	const [searchParams, setSearchParams] = useSearchParams();
	const query = {};
	let keyword = searchParams.get('keyword');
	let provinces = searchParams.get('provinces');
	let profession_id = searchParams.get('profession_id');
	let resume_active = searchParams.get('resume_active');

	if (keyword) query.keyword = keyword;
	if (provinces) query.provinces = provinces;
	if (profession_id) query.profession_id = profession_id;
	if (resume_active) query.resume_active = resume_active;

	const pushQuery = ({ keyword, provinces, profession_id, resume_active }) => {
		if (keyword !== undefined) {
			keyword === '' ? delete query.keyword : (query.keyword = keyword);
		}

		if (provinces !== undefined) {
			provinces === '' ? delete query.provinces : (query.provinces = provinces);
		}

		if (profession_id !== undefined) {
			profession_id === '' ? delete query.profession_id : (query.profession_id = profession_id);
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
