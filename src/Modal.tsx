import React from 'react';
// Necesitamos ReactDOM para renderizar nuestro modal en el DOM
import ReactDOM from 'react-dom';
// import './Modal.css';

type ModalProps = {
	children: React.ReactNode
}

function Modal({ children }: ModalProps) {
	// ReactDom tiene este método para crear portales
	return ReactDOM.createPortal(
		<div className="ModalBackground">
			{children}
		</div>,
		document.getElementById('modal')!
	);
}

export { Modal };
