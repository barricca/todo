import { cx } from "class-variance-authority";
import { type ChangeEvent, type FormEvent, useState } from "react";
import CheckIcon from "../assets/icons/check.svg?react";
import PencilIcon from "../assets/icons/pencil.svg?react";
import TrashIcon from "../assets/icons/trash.svg?react";
import XIcon from "../assets/icons/x.svg?react";
import { ButtonIcon } from "../components/ButtonIcon";
import { Card } from "../components/Card";
import { InputCheckbox } from "../components/InputCheckbox";
import { InputText } from "../components/InputText";
import { Skeleton } from "../components/Skeleton";
import { Text } from "../components/Text";
import { useTask } from "../hooks/useTask";
import { type Task, TaskState } from "../models/task";

interface TaskItemProps {
	task: Task;
	loading?: boolean;
}

export function TaskItem({ task, loading }: TaskItemProps) {
	const [isEditing, setIsEditing] = useState(
		task?.state === TaskState.Creating
	);
	const [taskTitle, setTaskTitle] = useState(task?.title || "");
	const {
		deleteTask,
		updateTask,
		updateTaskStatus,
		isDeletingTask,
		isUpdatingTask,
	} = useTask();

	function handleEditTask() {
		setIsEditing(true);
	}

	function handleChangeTaskTitle(e: ChangeEvent<HTMLInputElement>) {
		setTaskTitle(e.target.value || "");
	}

	function handleExitEditTask() {
		if (task.state === TaskState.Creating) {
			deleteTask(task.id);
		}
		setIsEditing(false);
	}

	async function handleSaveTask(e: FormEvent<HTMLFormElement>) {
		e.preventDefault();
		await updateTask(task.id, { title: taskTitle });
		setIsEditing(false);
	}

	function handleChangeTaskStatus(e: ChangeEvent<HTMLInputElement>) {
		const checked = e.target.checked;
		updateTaskStatus(task.id, checked);
	}

	async function handleDeleteTask() {
		await deleteTask(task.id);
	}

	return (
		<Card size="md">
			{!isEditing ? (
				<div className="flex items-center gap-4">
					<InputCheckbox
						checked={task?.concluded ?? false}
						onChange={handleChangeTaskStatus}
						loading={loading}
					/>
					{!loading ? (
						<Text
							className={cx("flex-1", {
								"line-through !text-gray-300": task?.concluded,
							})}
						>
							{task?.title}
						</Text>
					) : (
						<Skeleton className="flex-1 h-6" />
					)}
					<div className="flex gap-1">
						<ButtonIcon
							icon={TrashIcon}
							variant="tertiary"
							onClick={handleDeleteTask}
							loading={loading}
							handling={isDeletingTask}
						/>
						<ButtonIcon
							icon={PencilIcon}
							variant="tertiary"
							onClick={handleEditTask}
							loading={loading}
						/>
					</div>
				</div>
			) : (
				<form onSubmit={handleSaveTask} className="flex items-center gap-4">
					<InputText
						value={taskTitle}
						className="flex-1"
						onChange={handleChangeTaskTitle}
						required
						autoFocus
					/>
					<div className="flex gap-1">
						<ButtonIcon
							type="button"
							icon={XIcon}
							variant="secondary"
							onClick={handleExitEditTask}
						/>
						<ButtonIcon
							type="submit"
							icon={CheckIcon}
							variant="primary"
							handling={isUpdatingTask}
						/>
					</div>
				</form>
			)}
		</Card>
	);
}
