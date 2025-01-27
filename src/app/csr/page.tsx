'use client';

import { useEffect, useState } from 'react';

export default function CSRPage() {
	const [data, setData] = useState<{ title: string; body: string | any }>();

	useEffect(() => {
		async function fetchData() {
			const res = await fetch('https://jsonplaceholder.typicode.com/posts/3');
			const result = await res.json();
			setData(result);
		}
		fetchData();
	}, []);

	return (
		<div>
			<h1>Client-side Rendering (CSR)</h1>
			{data ? (
				<>
					<p>Title: {data.title}</p>
					<p>Body: {data.body}</p>
				</>
			) : (
				<p>Loading...</p>
			)}
		</div>
	);
}
