import { default as ReactModal } from 'react-modal';
import React from 'react';

const Modal = ({ children, isOpen, onRequestClose, ...props }) => {
	return (
		<ReactModal
			{...props}
			closeTimeoutMS={100}
			isOpen={isOpen}
			onRequestClose={onRequestClose}
			style={{
				overlay: {
					zIndex: '9999',
					backgroundColor: 'rgb(55 50 50 / 75%)'
				},
				content: {
					overflow: 'hidden',
					minWidth: 'fit-content',
					minHeight: 'fit-content',
					width: 'auto',
					height: 'auto',
					padding: 24,
					backgroundColor: '#ffff',
					position: 'absolute',
					left: '50%',
					top: '50%',
					maxHeight: '100%',
					transform: 'translate(-50%,-50%)'
				}
			}}>
			{children}
		</ReactModal>
	);
};

export default Modal;
