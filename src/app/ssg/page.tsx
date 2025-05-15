import { Metadata } from 'next';

export const metadata: Metadata = {
	title: 'Static Site Generation (SSG)',
};

async function getData() {
	// ดึงข้อมูลล่วงหน้าใน build time
	const res = await fetch('https://jsonplaceholder.typicode.com/posts/1');
	if (!res.ok) throw new Error('Failed to fetch data');
	return res.json();
}

export default async function SSGPage() {
	const data = await getData();

	return (
		<div className="p-8">
			<h1 className="font-semibold">Static Site Generation (SSG)</h1>
			<h4>
				การสร้างเว็บไซต์แบบ Static โดยที่เว็บไซต์จะถูก Render และสร้างเป็นไฟล์ HTML, CSS และ JavaScript
				ล่วงหน้า เมื่อมีผู้เยี่ยมชมเว็บไซต์
				ไฟล์เหล่านี้จะถูกส่งตรงไปยังเบราว์เซอร์โดยไม่ต้องมีการประมวลผลเพิ่มเติม
				ทำให้เว็บไซต์โหลดเร็วและมีความปลอดภัยสูง
			</h4>

			<div className="my-6">
				<p>Title: {data.title}</p>
				<p>Body: {data.body}</p>
			</div>
		</div>
	);
}
