export default function UnderConstruction() {
	return (
		<main className="flex min-h-screen items-center justify-center bg-[#051b5a] p-8">
			<div className="text-center text-white">
				<h1 className="text-4xl font-bold">🚧 Under Construction</h1>

				<p className="mt-4 max-w-md mx-auto text-gray-300 text-lg">
					We’re currently working on something awesome. Please check back again
					soon!
				</p>
				<a
					href="/"
					className="mt-6 inline-block rounded-lg bg-white px-6 py-3 text-[#051b5a] font-semibold hover:bg-gray-200 transition"
				>
					Go Back Home
				</a>
			</div>
		</main>
	);
}
