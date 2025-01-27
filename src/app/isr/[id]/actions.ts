'use server';

import { revalidatePath } from 'next/cache';

export async function refreshPost(id: string) {
	revalidatePath(`/posts/${id}`);
}
