import { Metadata } from 'next';

export const metadata: Metadata = {
	title: 'Server-side Rendering (SSR)',
};

async function getData() {
	// Fetch ข้อมูลแบบเรียลไทม์ในทุก request
	const res = await fetch('https://jsonplaceholder.typicode.com/posts/2', {
		cache: 'no-store', // SSR: ไม่ใช้ cache
	});
	if (!res.ok) throw new Error('Failed to fetch data');
	return res.json();
}

export default async function SSRPage() {
	const data = await getData();

	return (
		<div>
			<h1>Server-side Rendering (SSR)</h1>
			<p>Title: {data.title}</p>
			<p>Body: {data.body}</p>
		</div>
	);
}
