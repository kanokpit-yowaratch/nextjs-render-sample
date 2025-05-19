'use client';

import { useEffect, useState } from 'react';
import LazyModal from '@/components/csr/LazyModal';

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
		<div className="p-8">
			<h1 className="font-semibold">Client-side Rendering (CSR)</h1>
			<h4>
				ไคลเอ็นต์จะทำการสร้างและแสดงผลหน้าเว็บโดยใช้ JavaScript ซึ่งจะแสดง HTML พื้นฐานก่อน จากนั้น request
				ข้อมูลจากเซิร์ฟเวอร์แบบ Asynchronous และอัปเดตหน้าเว็บโดยไม่ต้องโหลดใหม่
			</h4>
			{data ? (
				<div className="my-6">
					<p>Title: {data.title}</p>
					<p>Body: {data.body}</p>
				</div>
			) : (
				<p>Loading data from API...</p>
			)}

			<div className="mb-8 text-center">
				<LazyModal
					buttonText="Open Lazy Modal"
					modalTitle="Modal Lazy Loading"
					contentTitle="Dynamic Import Content"
				/>
			</div>
		</div>
	);
}
