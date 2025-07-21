import { BrowserRouter, Route, Routes } from "react-router";
import { LayoutMain } from "./pages/LayoutMain";
import { PageComponents } from "./pages/PageComponents";
import { PageHome } from "./pages/PageHome";

export function App() {
	return (
		<BrowserRouter>
			<Routes>
				<Route element={<LayoutMain />}>
					<Route index element={<PageHome />} />
					<Route path="/components" element={<PageComponents />} />
				</Route>
			</Routes>
		</BrowserRouter>
	);
}
