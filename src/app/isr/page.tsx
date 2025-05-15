import { Metadata } from 'next';

export const metadata: Metadata = {
	title: 'Incremental Static Regeneration (ISR)',
};

// ข้อมูลจะถูกโหลดครั้งแรกแบบ static และอัปเดตใหม่ทุก 60 วินาที
async function getData() {
	// Revalidate ข้อมูลทุก 60 วินาที
	const res = await fetch('https://jsonplaceholder.typicode.com/posts/4', {
		next: { revalidate: 60 }, // ISR: รีเฟรช cache ทุก 60 วินาที
	});
	if (!res.ok) throw new Error('Failed to fetch data');
	return res.json();
}

export default async function ISRPage() {
	const data = await getData();

	return (
		<div className="p-8">
			<h1 className="font-semibold">Incremental Static Regeneration (ISR)</h1>
			<h4>
				สร้างหน้าเว็บแบบ Static ล่วงหน้า (Pre-render) สำหรับเนื้อหาที่ไม่ค่อยเปลี่ยนแปลง
				เมื่อมีผู้เยี่ยมชมหน้าเว็บ ระบบจะตรวจสอบว่ามีการอัปเดตเนื้อหาหรือไม่ หากมีการอัปเดต
				ระบบจะสร้างหน้าเว็บใหม่แบบ Static ในพื้นหลัง โดยไม่ส่งผลกระทบต่อผู้เยี่ยมชม
				เมื่อสร้างหน้าเว็บใหม่เสร็จแล้ว ระบบจะอัปเดตหน้าเว็บที่แสดงให้ผู้เยี่ยมชมทันที
			</h4>

			<div className="my-6">
				<p>Title: {data.title}</p>
				<p>Body: {data.body}</p>
			</div>

			<a
				href="/isr/1"
				className="rounded-full border border-solid border-transparent transition-colors flex items-center justify-center bg-foreground text-background gap-2 hover:bg-[#383838] dark:hover:bg-[#ccc] text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5">
				Try ID: 1
			</a>
		</div>
	);
}
