import React, {
	cloneElement,
	createContext,
	useContext,
	useState,
} from 'react';
import { Button } from '../Buttons';
import { createPortal } from 'react-dom';
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
	const { openName } = useModal();
	// const { openName }: any = useContext(ModalContext);
	if (name !== openName) return null;
	return createPortal(
		<ModalOverlay>
			<ModalCentered>{children}</ModalCentered>
		</ModalOverlay>,
		document.body
	);
};

// Open Btn old : if we were to use cloning
// const Open = ({ children, opens: openWindowName }: any) => {
// 	const { open } = useModal();
// 	// const { open }: any = useContext(ModalContext);
// 	return cloneElement(children, { onClick: () => open(openWindowName) });
// };
const Open = ({ children }: { children: React.ReactNode }) => {
	return children;
};
//////////////////// Alternative of cling the btn. which I will use cause cloing is not the efficient way (react doc and jonas both said. But jonas did not refactored this)
/////// Here we are using a custom hook for exposing the context values
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
