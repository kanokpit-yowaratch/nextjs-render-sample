// app/ssg/page.tsx
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
        <div>
            <h1>Static Site Generation (SSG)</h1>
            <p>Title: {data.title}</p>
            <p>Body: {data.body}</p>
        </div>
    );
}
