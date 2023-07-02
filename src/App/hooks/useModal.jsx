import { useState, useEffect } from 'react';

const useModal = (modals) => {
	const [isShowing, setIsShowing] = useState(modals);
	function toggle(modalName) {
		setIsShowing({
			...isShowing,
			[modalName]: !isShowing[modalName]
		});
	}
	useEffect(() => {
		console.log(isShowing);
	}, [isShowing]);

	return {
		isShowing,
		toggle
	};
};

export default useModal;
