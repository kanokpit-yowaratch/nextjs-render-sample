import { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
	title: 'Static Site Generation (SSG)',
};

export default async function SSGPage() {
	return (
		<div className="p-8">
			<h1 className="font-semibold">Static Site Generation (SSG)</h1>
			<h4>
				การสร้างเว็บไซต์แบบ Static โดยที่เว็บไซต์จะถูก Render และสร้างเป็นไฟล์ HTML, CSS และ JavaScript
				ล่วงหน้า เมื่อมีผู้เยี่ยมชมเว็บไซต์
				ไฟล์เหล่านี้จะถูกส่งตรงไปยังเบราว์เซอร์โดยไม่ต้องมีการประมวลผลเพิ่มเติม
				ทำให้เว็บไซต์โหลดเร็วและมีความปลอดภัยสูง
			</h4>

			<div className="flex items-center gap-2 my-6">
				Workshop เพิ่มเติม:
				<Link
					href={`https://github.com/kanokpit-yowaratch/ssg-workshop`}
					className="text-indigo-700">SSG Workshop</Link>
			</div>
		</div>
	);
}
