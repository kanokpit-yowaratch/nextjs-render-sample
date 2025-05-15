import Image from 'next/image';

export default function Home() {
	return (
		<div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
			<main className="flex flex-col gap-8 row-start-2 items-center sm:items-start">
				<div className="flex gap-2">
					<div className="font-semibold text-3xl">การ Render แต่ละแบบใน</div>
					<Image
						className="dark:invert"
						src="/next.svg"
						alt="Next.js logo"
						width={180}
						height={38}
						priority
					/>
				</div>

				<ol className="w-full list-inside list-decimal text-sm text-center sm:text-left font-[family-name:var(--font-geist-mono)]">
					<li className="mb-2">
						<a
							href="/csr"
							className="rounded-full transition-colors bg-foreground text-background gap-2 hover:bg-[#383838] dark:hover:bg-[#ccc] text-sm px-2"
							target="_blank"
							rel="noopener noreferrer">
							Client Side Rendering (CSR)
						</a>
					</li>
					<li className="mb-2">
						<a
							href="/ssr"
							className="rounded-full transition-colors bg-foreground text-background gap-2 hover:bg-[#383838] dark:hover:bg-[#ccc] text-sm px-2"
							target="_blank"
							rel="noopener noreferrer">
							Server Side Rendering (SSR)
						</a>
					</li>
					<li className="mb-2">
						<a
							href="/ssg"
							className="rounded-full transition-colors bg-foreground text-background gap-2 hover:bg-[#383838] dark:hover:bg-[#ccc] text-sm px-2"
							target="_blank"
							rel="noopener noreferrer">
							Static Site Generation (SSG)
						</a>
					</li>
					<li className="mb-2">
						<a
							href="/isr"
							className="rounded-full transition-colors bg-foreground text-background gap-2 hover:bg-[#383838] dark:hover:bg-[#ccc] text-sm px-2"
							target="_blank"
							rel="noopener noreferrer">
							Incremental Static Regeneration (ISR)
						</a>
					</li>
				</ol>
			</main>
		</div>
	);
}
