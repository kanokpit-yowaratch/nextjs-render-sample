import Image from 'next/image';
import Link from 'next/link';

export default function Home() {
	return (
		<div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">

			<div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
				<main className="flex flex-col gap-8 row-start-2 items-center sm:items-start">
					<div className="flex gap-2">
						<h1 className="flex gap-2 text-3xl font-bold bg-gradient-to-r from-white via-purple-200 to-cyan-200 bg-clip-text text-transparent">
							การ Render แต่ละแบบใน
							<Image
								src="/next.svg"
								alt="Next.js logo"
								width={150}
								height={30}
								priority
							/>
						</h1>
					</div>

					<ul className="w-full">
						<li className="mb-3">
							<Link
								href="/csr"
								className="gap-2 py-1 px-2 text-white text-lg rounded-md bg-gradient-to-r from-yellow-500 to-fuchsia-600 hover:to-yellow-600 transition-all duration-300"
								target="_blank"
								rel="noopener noreferrer">
								Client Side Rendering (CSR)
							</Link>
						</li>
						<li className="mb-3">
							<Link
								href="/ssr"
								className="gap-2 py-1 px-2 text-white text-lg rounded-md bg-gradient-to-r from-yellow-500 to-fuchsia-600 hover:to-yellow-600 transition-all duration-300"
								target="_blank"
								rel="noopener noreferrer">
								Server Side Rendering (SSR)
							</Link>
						</li>
						<li className="mb-3">
							<Link
								href="/ssg"
								className="gap-2 py-1 px-2 text-white text-lg rounded-md bg-gradient-to-r from-yellow-500 to-fuchsia-600 hover:to-yellow-600 transition-all duration-300"
								target="_blank"
								rel="noopener noreferrer">
								Static Site Generation (SSG)
							</Link>
						</li>
						<li>
							<Link
								href="/isr"
								className="gap-2 py-1 px-2 text-white text-lg rounded-md bg-gradient-to-r from-yellow-500 to-fuchsia-600 hover:to-yellow-600 transition-all duration-300"
								target="_blank"
								rel="noopener noreferrer">
								Incremental Static Regeneration (ISR)
							</Link>
						</li>
					</ul>
				</main>
			</div>
		</div>
	);
}
