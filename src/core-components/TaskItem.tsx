import { cx } from "class-variance-authority";
import { useState } from "react";
import CheckIcon from "../assets/icons/check.svg?react";
import PencilIcon from "../assets/icons/pencil.svg?react";
import PlusIcon from "../assets/icons/plus.svg?react";
import SpinnerIcon from "../assets/icons/spinner.svg?react";
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

	function handleEditTask() {
		setIsEditing(true);
	}

	function handleExitEditTask() {
		setIsEditing(false);
	}

	return (
		<Card size="md" className="flex items-center gap-4">
			{!isEditing ? (
				<>
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
				</>
			) : (
				<>
					<InputText className="flex-1" />
					<div className="flex gap-1">
						<ButtonIcon
							icon={XIcon}
							variant="secondary"
							onClick={handleExitEditTask}
						/>
						<ButtonIcon icon={CheckIcon} variant="primary" />
					</div>
				</>
			)}
		</Card>
	);
}
