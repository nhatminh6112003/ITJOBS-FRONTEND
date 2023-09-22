import { CSSProperties } from 'react';
import SyncLoader from 'react-spinners/SyncLoader';

const loadingStyle = {
	textAlign: 'center',
	backgroundColor: ' #ffff',
	display: ' flex',
	justifyContent: 'center',
	alignItems: 'center',
	width: '100%',
	height: ' 100vh'
};
const Loading = ({ status = true, color = '#ff7400' }) => {
	return (
		<div style={loadingStyle} className='loading'>
			<SyncLoader loading={status} color={color} size={15} aria-label='Loading Spinner' />
		</div>
	);
};

export default Loading;
