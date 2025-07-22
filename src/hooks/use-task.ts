import useLocalStorage from "use-local-storage";
import { TASKS_KEY, type Task } from "../models/task";

export function useTask() {
	const [tasks] = useLocalStorage<Task[]>(TASKS_KEY, []);

	return {
		tasks,
		taskCount: tasks.length,
		concludedTasksCount: tasks.filter((task) => task.concluded).length,
	};
}
