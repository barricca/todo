import { Outlet } from "react-router";
import { Footer } from "../core-components/footer";
import { Header } from "../core-components/Header";
import { MainContent } from "../core-components/MainContent";

export function LayoutMain() {
	return (
		<>
			<Header />

			<MainContent className="mt-4 md:mt-8">
				<Outlet />
			</MainContent>

			<Footer />
		</>
	);
}
