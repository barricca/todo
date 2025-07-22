import PlusIcon from "../assets/icons/plus.svg?react";
import { Button } from "../components/Button";
import { useTask } from "../hooks/useTask";
import { useTasks } from "../hooks/useTasks";
import { TaskState } from "../models/task";
import { TaskItem } from "./TaskItem";

export function TaskList() {
	const { tasks } = useTasks();
	const { prepareTask } = useTask();

	function handleNewTask() {
		prepareTask();
	}

	return (
		<>
			<section>
				<Button
					icon={PlusIcon}
					className="w-full"
					onClick={handleNewTask}
					disabled={tasks.some((task) => task.state === TaskState.Creating)}
				>
					Nova Tarefa
				</Button>
			</section>
			<section className="space-y-2">
				{tasks.map((task) => (
					<TaskItem key={task.id} task={task} />
				))}
			</section>
		</>
	);
}
