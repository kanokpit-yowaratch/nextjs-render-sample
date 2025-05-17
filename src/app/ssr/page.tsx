async function getData() {
	// Fetch ข้อมูลแบบเรียลไทม์ในทุก request
	const res = await fetch('https://jsonplaceholder.typicode.com/posts/2', {
		cache: 'no-store', // SSR: ไม่ใช้ cache
	});
	if (!res.ok) throw new Error('Failed to fetch data');
	return res.json();
}

export async function generateMetadata() {
	const data = await getData();
	return {
		title: data.title,
		description: 'Server Side Rendering (SSR)',
		openenGraph: {
			images: []
		}
	}
}

export default async function SSRPage() {
	const data = await getData();

	return (
		<div className="p-8">
			<h1 className="font-semibold">Server-side Rendering (SSR)</h1>
			<h4>
				เซิร์ฟเวอร์จะสร้าง HTML ของหน้าเว็บและส่งไปยังเบราว์เซอร์ของผู้ใช้ เป็นตัวช่วยเพิ่มความเร็วและ SEO
				ให้เว็บไซต์
			</h4>

			<div className="my-6">
				<p>Title: {data.title}</p>
				<p>Body: {data.body}</p>
			</div>
		</div>
	);
}
