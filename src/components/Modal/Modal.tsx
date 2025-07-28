'use client';
import React, { createContext, useContext, useState } from 'react';
import { IoMdClose } from 'react-icons/io';
import { createPortal } from 'react-dom';
import { Button } from '../Buttons';
type ModalProps = {
	children: React.ReactNode;
	onClose?: any;
};
type ModalContextType = {
	open: (name: string) => void;
	close: () => void;
	openName: string;
};
const ModalContext = createContext<ModalContextType | null>(null);

const Modal = ({ children }: ModalProps) => {
	const [openName, setOpenName] = useState('');

	// close fun
	const close = () => setOpenName('');
	// open func
	const open = setOpenName;

	return (
		<ModalContext.Provider value={{ open, close, openName }}>
			{children}
		</ModalContext.Provider>
	);
};

// window
const Window = ({
	children,
	name,
}: {
	children: React.ReactNode;
	name: string;
}) => {
	const { openName, close } = useModal();
	if (name !== openName) return null;
	return createPortal(
		<ModalOverlay>
			<ModalCentered>
				<Button onClick={close}>
					<IoMdClose />
				</Button>
				{children}
			</ModalCentered>
		</ModalOverlay>,
		document.body
	);
};

const Open = ({ children }: { children: React.ReactNode }) => {
	return children;
};

export const useModal = () => {
	const context = useContext(ModalContext);
	if (!context) throw new Error('useModal must be used within <Modal>');
	return context;
};
////////////////////// children as property
Modal.Open = Open;
Modal.Window = Window;

export default Modal;

// Css
const ModalCentered = ({ children }: any) => {
	return (
		<div className='fixed top-1/2 left-1/2 -translate-1/2 bg-amber-100 rounded-md shadow-2xl px-[2.5rem] py-[1.5rem] transition-all duration-75'>
			{children}
		</div>
	);
};
const ModalOverlay = ({ children }: any) => {
	return (
		<div className='fixed top-0 left-0 w-full h-full bg-black/30 backdrop-blur-sm z-[1000] transition-all duration-75'>
			{children}
		</div>
	);
};
export const OpenFormButton = ({
	openName,
	btnName,
	PropBtn,
}: {
	openName: string;
	btnName: string;
	PropBtn: any;
}) => {
	const { open } = useModal();
	return <PropBtn onClick={() => open(openName)}>{btnName}</PropBtn>;
};
