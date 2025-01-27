import { notFound } from 'next/navigation';
import { ParamProps } from '@/types/common';
import Refresh from '@/components/isr/Refresh';

interface Post {
	id: number;
	title: string;
	body: string;
}

// ฟังก์ชันโหลดข้อมูลแบบ ISR
// ข้อมูลจะถูกโหลดครั้งแรกแบบ static และอัปเดตใหม่ทุก 60 วินาที
async function getPost(id: string): Promise<Post | null> {
	const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`, {
		next: { revalidate: 60 }, // ISR: อัปเดตข้อมูลทุก 60 วินาที
	});

	if (!res.ok) return null;
	return res.json();
}

// หน้าแสดงโพสต์
export default async function PostPage({ params }: ParamProps) {
	const { id } = await params;
	const post = await getPost(id);

	if (!post) {
		notFound();
	}

	return (
		<main className="p-6">
			<h1 className="text-2xl font-bold">{post.title}</h1>
			<p className="mt-4">{post.body}</p>

			<Refresh id={id} />
		</main>
	);
}
