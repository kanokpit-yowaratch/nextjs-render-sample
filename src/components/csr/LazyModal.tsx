'use client';

import { useState, useEffect, Suspense } from 'react';
import dynamic from 'next/dynamic';
import ModalFrame from './ModalFrame';

// Dynamic import for ModalContent
const ModalContent = dynamic(() => import('./ModalContent'), {
	loading: () => <p className="py-4">Loading Modal Content...</p>, // fallback display
	ssr: false, // not need Server-Side Rendering for Modal
});

interface LazyModalProps {
	buttonText: string;
	modalTitle: string;
	contentTitle: string;
}

export const LazyModal: React.FC<LazyModalProps> = ({ buttonText, modalTitle, contentTitle }) => {
	const [isOpen, setIsOpen] = useState(false);
	const [isMounted, setIsMounted] = useState(false);

	useEffect(() => {
		setIsMounted(true);
	}, []);

	const openModal = () => {
		setIsOpen(true);
	};

	if (!isMounted) {
		return (
			<button
				className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition-colors"
				disabled>
				{buttonText}
			</button>
		);
	}

	return (
		<>
			<button
				onClick={openModal}
				className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition-colors">
				{buttonText}
			</button>

			{isOpen && (
				<ModalFrame isOpen={isOpen} onClose={() => setIsOpen(false)} title={modalTitle}>
					<Suspense fallback={<p>Loading content...</p>}>
						<ModalContent title={contentTitle} />
					</Suspense>
				</ModalFrame>
			)}
		</>
	);
};

export default LazyModal;
