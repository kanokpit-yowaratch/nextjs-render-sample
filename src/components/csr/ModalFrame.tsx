'use client';

import { useState } from 'react';

interface ModalProps {
	isOpen: boolean;
	onClose: () => void;
	title: string;
	children: React.ReactNode;
}

const ModalFrame: React.FC<ModalProps> = ({ isOpen, onClose, title, children }) => {
	const [isClosing, setIsClosing] = useState(false);

	const handleClose = () => {
		setIsClosing(true);
		setTimeout(() => {
			setIsClosing(false);
			onClose();
		}, 300);
	};

	if (!isOpen) return null;

	return (
		<div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
			<div
				className={`bg-white rounded-lg w-11/12 md:w-3/4 lg:w-1/2 xl:w-1/3 p-6 shadow-xl transform transition-all duration-300 ${
					isClosing ? 'scale-95 opacity-0' : 'scale-100 opacity-100'
				}`}>
				<div className="flex justify-between items-center mb-4">
					<h2 className="text-xl font-bold">{title}</h2>
					<button onClick={handleClose} className="text-gray-500 hover:text-gray-700">
						<svg
							className="w-6 h-6"
							fill="none"
							stroke="currentColor"
							viewBox="0 0 24 24"
							xmlns="http://www.w3.org/2000/svg">
							<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
						</svg>
					</button>
				</div>
				<div className="modal-content">{children}</div>
			</div>
		</div>
	);
};

export default ModalFrame;
