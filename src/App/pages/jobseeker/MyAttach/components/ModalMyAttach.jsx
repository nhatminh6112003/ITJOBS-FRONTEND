import { default as ReactModal } from 'react-modal';
import React from 'react';

const ModalMyAttach = ({ children, isOpen, hide, onRequestClose, title, className: cx, wrapModal, ...props }) => {
	return (
		<ReactModal
			isOpen={isOpen}
			onRequestClose={hide}
			style={{
				overlay: {
					zIndex: '9999',
					backgroundColor: '#343434'
				},
				content: {
					padding: 0,
					overflow: 'hidden',
					minWidth: 'fit-content',
					minHeight: 'fit-content',
					margin: 30,
					backgroundColor: '#ffff',
					position: 'absolute',
					left: '50%',
					top: '50%',
					transform: 'translate(-50%,-50%)'
				}
			}}>
			<div>
				<h2 className={cx('modal-title')} style={{ textAlign: 'center', padding: 4 }}>
					{title}
				</h2>
				<div className={cx('modal-body')}>{children}</div>
				<button
					onClick={hide}
					type='button'
					className={cx('fancybox-button', 'fancybox-close-small')}
					title='Close'>
					<svg xmlns='http://www.w3.org/2000/svg' version={1} viewBox='0 0 24 24'>
						<path d='M13 12l5-5-1-1-5 5-5-5-1 1 5 5-5 5 1 1 5-5 5 5 1-1z' />
					</svg>
				</button>
			</div>
		</ReactModal>
	);
};

export default ModalMyAttach;
