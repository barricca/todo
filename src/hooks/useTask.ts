import useLocalStorage from "use-local-storage";
import { TASKS_KEY, type Task, TaskState } from "../models/task";

export function useTask() {
	const [tasks, setTasks] = useLocalStorage<Task[]>(TASKS_KEY, []);

	function prepareTask() {
		setTasks([
			...tasks,
			{
				id: crypto.randomUUID(),
				title: "",
				state: TaskState.Creating,
			},
		]);
	}

	function updateTask(id: string, payload: { title: Task["title"] }) {
		setTasks(
			tasks.map((task) =>
				task.id === id
					? {
							...task,
							state: TaskState.Created,
							...payload,
						}
					: task
			)
		);
	}

	function updateTaskStatus(id: string, concluded: boolean) {
		setTasks(
			tasks.map((task) =>
				task.id === id
					? {
							...task,
							concluded,
						}
					: task
			)
		);
	}

	return { prepareTask, updateTask, updateTaskStatus };
}
