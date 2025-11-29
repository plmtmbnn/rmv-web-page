import { Suspense } from "react";
import NewsListPage from "./news-component";

export default function Page() {
	return (
		<Suspense fallback={<div className="p-10 text-center">Loading...</div>}>
			<NewsListPage />
		</Suspense>
	);
}
