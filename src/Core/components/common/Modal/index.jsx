import { default as ReactModal } from 'react-modal';
import React from 'react';

const Modal = ({ children, isOpen, onRequestClose, ...props }) => {
	return (
		<ReactModal
			{...props}
			closeTimeoutMS={2000}
			isOpen={isOpen}
			onRequestClose={onRequestClose}
			style={{
				overlay: {
					zIndex: '9999',
					backgroundColor: 'rgb(55 50 50 / 75%)'
				},
				content: {
					overflow: 'hidden',
					minWidth: '1000px',
					padding: 0,
					backgroundColor: '#ffff',
					position: 'absolute',
					height: '90%',
					left: '50%',
					top: '50%',
					transform: 'translate(-50%,-50%)'
				}
			}}
			
			>
			{children}
		</ReactModal>
	);
};

export default Modal;
