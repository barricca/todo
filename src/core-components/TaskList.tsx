import PlusIcon from "../assets/icons/plus.svg?react";
import { Button } from "../components/Button";
import { useTask } from "../hooks/useTask";
import { useTasks } from "../hooks/useTasks";
import { type Task, TaskState } from "../models/task";
import { TaskItem } from "./TaskItem";

export function TaskList() {
	const { tasks, isLoadingTasks } = useTasks();
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
					disabled={
						tasks.some((task) => task.state === TaskState.Creating) ||
						isLoadingTasks
					}
				>
					Nova Tarefa
				</Button>
			</section>
			<section className="space-y-2">
				{!isLoadingTasks &&
					tasks.map((task) => <TaskItem key={task.id} task={task} />)}
				{isLoadingTasks && (
					<>
						<TaskItem task={{} as Task} loading />
						<TaskItem task={{} as Task} loading />
						<TaskItem task={{} as Task} loading />
					</>
				)}
			</section>
		</>
	);
}
