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
import { Text } from "../components/Text";
import { type Task, TaskState } from "../models/task";

interface TaskItemProps {
	task: Task;
}

export function TaskItem({ task }: TaskItemProps) {
	const [isEditing, setIsEditing] = useState(
		task?.state === TaskState.Creating
	);
	const [taskTitle, setTaskTitle] = useState("");

	function handleChangeTaskTitle(e: ChangeEvent<HTMLInputElement>) {
		setTaskTitle(e.target.value || "");
	}

	function handleSaveTask(e: FormEvent<HTMLFormElement>) {
		e.preventDefault();
		console.log({ id: task.id, title: taskTitle });
		setIsEditing(false);
	}

	function handleEditTask() {
		setIsEditing(true);
	}

	function handleExitEditTask() {
		setIsEditing(false);
	}

	return (
		<Card size="md">
			{!isEditing ? (
				<div className="flex items-center gap-4">
					<InputCheckbox
						value={task?.concluded?.toString()}
						checked={task?.concluded}
					/>
					<Text
						className={cx("flex-1", {
							"line-through !text-gray-300": task?.concluded,
						})}
					>
						{task?.title}
					</Text>
					<div className="flex gap-1">
						<ButtonIcon icon={TrashIcon} variant="tertiary" />
						<ButtonIcon
							icon={PencilIcon}
							variant="tertiary"
							onClick={handleEditTask}
						/>
					</div>
				</div>
			) : (
				<form onSubmit={handleSaveTask} className="flex items-center gap-4">
					<InputText
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
						<ButtonIcon type="submit" icon={CheckIcon} variant="primary" />
					</div>
				</form>
			)}
		</Card>
	);
}
