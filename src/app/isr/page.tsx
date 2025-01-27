// app/isr/page.tsx
import { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'Incremental Static Regeneration (ISR)',
};

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
        </div>
    );
}
