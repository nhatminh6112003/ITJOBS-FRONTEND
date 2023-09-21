import { useState } from 'react';

const useModal = (modals) => {
	const [isShowing, setIsShowing] = useState(modals);
	function toggle(modalName) {
		setIsShowing({
			...isShowing,
			[modalName]: !isShowing[modalName]
		});
	}

	return {
		isShowing,
		toggle
	};
};

export default useModal;
