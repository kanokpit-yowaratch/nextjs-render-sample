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
		<div>
			<h1>Incremental Static Regeneration (ISR)</h1>
			<p>Title: {data.title}</p>
			<p>Body: {data.body}</p>

			<a href="/isr/1"
				className="rounded-full border border-solid border-transparent transition-colors flex items-center justify-center bg-foreground text-background gap-2 hover:bg-[#383838] dark:hover:bg-[#ccc] text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5">
				Try ID: 1
			</a>

			<div style={{ display: 'flex', flexDirection: 'column' }}>
				<div>สรุป</div>
				<div>✅ ใช้ fetch() กับ revalidate สำหรับ ISR</div>
				<div>✅ รองรับ notFound() หากไม่มีข้อมูล</div>
				<div>✅ ใช้ revalidatePath() เพื่อบังคับให้โหลดข้อมูลใหม่</div>
				<div>แบบนี้ทำให้หน้าเพจโหลดเร็วขึ้นและยังคงมีการอัปเดตข้อมูลแบบอัตโนมัติ! 🚀</div>
			</div>
		</div>
	);
}
