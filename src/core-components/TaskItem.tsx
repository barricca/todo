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

export function TaskItem() {
	const [isEditing, setIsEditing] = useState(true);

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
					<InputCheckbox />
					<Text className="flex-1">🛒 Fazer compras da semana</Text>
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
