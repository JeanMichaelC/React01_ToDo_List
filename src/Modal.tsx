import React from 'react';
// Necesitamos ReactDOM para renderizar nuestro modal en el DOM
import ReactDOM from 'react-dom';
import styled from 'styled-components';



type ModalProps = {
	children: React.ReactNode
}
function Modal({ children }: ModalProps) {
	// ReactDom tiene este método para crear portales
	return ReactDOM.createPortal(
		<StyledModal>
			{children}
		</StyledModal>,
		document.getElementById('modal')!
	);
}
export { Modal };



const StyledModal = styled.div`
  background: rgba(32,35,41,.8);
  position: fixed;
  top: -10px;
  left: -10px;
  right: -10px;
  bottom: -10px;
  display: flex;
  justify-content: center;
  align-items: center;
  color: white;
`;
