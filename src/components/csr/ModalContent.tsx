'use client';

import { useState, useEffect } from 'react';

interface ModalContentProps {
	title: string;
}

const ModalContent: React.FC<ModalContentProps> = ({ title }) => {
	const [data, setData] = useState<string[]>([]);

	useEffect(() => {
		// Simulate long-running data loads
		console.log('ModalContent loaded and mounted');

		const mockData = Array.from({ length: 100 }, (_, i) => `Item ${i + 1}`);

		// Simulate delayed data loading
		const timer = setTimeout(() => {
			setData(mockData);
		}, 500);

		return () => clearTimeout(timer);
	}, []);

	return (
		<div className="py-4">
			<h3 className="text-lg font-semibold mb-3">{title}</h3>
			<div className="max-h-64 overflow-y-auto">
				{data.length === 0 ? (
					<p>Content loading...</p>
				) : (
					<ul className="space-y-2">
						{data.map((item, index) => (
							<li key={`item-${index.toString()}`} className="p-2 bg-gray-100 rounded hover:bg-gray-200">
								{item}
							</li>
						))}
					</ul>
				)}
			</div>
		</div>
	);
};

export default ModalContent;
