import { Badge } from "../components/Badge";
import { Text } from "../components/Text";
import { useTasks } from "../hooks/useTasks";

export function TaskSummary() {
	const { createdTasksCount, concludedTasksCount, isLoadingTasks } = useTasks();

	return (
		<>
			<div className="flex items-center gap-2">
				<Text variant="body-sm-bold" className="!text-gray-300">
					Tarefas criadas
				</Text>
				<Badge variant="secondary" loading={isLoadingTasks}>
					{createdTasksCount}
				</Badge>
			</div>
			<div className="flex items-center gap-2">
				<Text variant="body-sm-bold" className="!text-gray-300">
					Concluídas
				</Text>
				<Badge variant="primary" loading={isLoadingTasks}>
					{concludedTasksCount} de {createdTasksCount}
				</Badge>
			</div>
		</>
	);
}
