import { Container } from "../components/Container";
import { TaskItem } from "../core-components/TaskItem";
import { TaskSummary } from "../core-components/TaskSummary";

export function PageHome() {
	return (
		<Container as="article" className="space-y-3">
			<header className="flex items-center justify-between">
				<TaskSummary />
			</header>
			<TaskItem />
		</Container>
	);
}
