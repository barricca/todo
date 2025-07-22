import PlusIcon from "../assets/icons/plus.svg?react";
import { Button } from "../components/Button";
import { useTask } from "../hooks/use-task";
import { TaskItem } from "./TaskItem";

export function TaskList() {
	const { tasks } = useTask();
	console.log("tasks", tasks);
	return (
		<>
			<section>
				<Button icon={PlusIcon} className="w-full">
					Nova Tarefa
				</Button>
			</section>
			<section className="space-y-2">
				<TaskItem />
				<TaskItem />
				<TaskItem />
				<TaskItem />
			</section>
		</>
	);
}
