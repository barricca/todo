import useLocalStorage from "use-local-storage";
import { TASKS_KEY, type Task, TaskState } from "../models/task";

export function useTasks() {
	const [tasks] = useLocalStorage<Task[]>(TASKS_KEY, []);

	return {
		tasks,
		createdTaskCount: tasks.filter((task) => task.state === TaskState.Created)
			.length,
		concludedTasksCount: tasks.filter((task) => task.concluded).length,
	};
}
