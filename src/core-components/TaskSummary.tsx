import { Badge } from "../components/Badge";
import { Text } from "../components/Text";
import { useTasks } from "../hooks/useTasks";

export function TaskSummary() {
	const { createdTaskCount, concludedTasksCount } = useTasks();

	return (
		<>
			<div className="flex items-center gap-2">
				<Text variant="body-sm-bold" className="!text-gray-300">
					Tarefas criadas
				</Text>
				<Badge variant="secondary">{createdTaskCount}</Badge>
			</div>
			<div className="flex items-center gap-2">
				<Text variant="body-sm-bold" className="!text-gray-300">
					Tarefas concluídas
				</Text>
				<Badge variant="primary">
					{concludedTasksCount} de {createdTaskCount}
				</Badge>
			</div>
		</>
	);
}
