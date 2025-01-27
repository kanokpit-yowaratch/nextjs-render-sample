'use client';

import { refreshPost } from '@/app/isr/[id]/actions';
import { IdParams } from '@/types/common';

export default function Refresh({ id }: IdParams) {
	const refresh = () => {
		refreshPost(id);
	};
	return (
		<button className="mt-4 px-4 py-2 bg-blue-500 text-white rounded" onClick={refresh}>
			Refresh Post
		</button>
	);
}
