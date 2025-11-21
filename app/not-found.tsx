export default function NotFound() {
  return (
    <main className="flex min-h-screen items-center justify-center bg-[#051b5a] p-8">
      <div className="text-center text-white">
        <h1 className="text-7xl font-extrabold">404</h1>

        <h2 className="mt-4 text-2xl font-semibold">
          Page Not Found
        </h2>

        <p className="mt-2 max-w-md mx-auto text-gray-300">
          Sorry, the page you’re looking for doesn’t exist or may have been moved.
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
