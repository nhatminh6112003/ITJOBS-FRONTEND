import { useState, useEffect } from 'react';
import axiosClient from '~/api/axiosClient';
const useAxios = (url, options = {}) => {
	const [data, setData] = useState(null);
	const [error, setError] = useState(null);
	const [loading, setLoading] = useState(true);

	useEffect(() => {
		const fetchData = async () => {
			try {
				setLoading(true);
				const response = await axiosClient(url, options);
				setData(response.data);
			} catch (error) {
				setError(error);
			} finally {
				setLoading(false);
			}
		};
		fetchData();
	}, [url, options]);

	return { data, error, loading };
};

export default useAxios;
