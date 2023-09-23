import { isRejected, isRejectedWithValue } from '@reduxjs/toolkit';
import { toast } from 'react-toastify';
const RTKQueryLogger = (api) => (next) => (action) => {
	if (isRejectedWithValue(action)) {
		console.log('🚀 ~ file: RTKQueryLogger.js:5 ~ RTKQueryLogger ~ action:', action);
		// toast.error('Lỗi Server!');
	}
	return next(action);
};

export default RTKQueryLogger;
