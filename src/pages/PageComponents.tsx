import CheckIcon from "../assets/icons/check.svg?react";
import PencilIcon from "../assets/icons/pencil.svg?react";
import PlusIcon from "../assets/icons/plus.svg?react";
import SpinnerIcon from "../assets/icons/spinner.svg?react";
import TrashIcon from "../assets/icons/trash.svg?react";
import XIcon from "../assets/icons/x.svg?react";

import { Badge } from "../components/Badge";
import { Button } from "../components/Button";
import { ButtonIcon } from "../components/ButtonIcon";
import { Card } from "../components/Card";
import { Container } from "../components/Container";
import { Icon } from "../components/Icon";
import { InputCheckbox } from "../components/InputCheckbox";
import { InputText } from "../components/InputText";
import { Skeleton } from "../components/Skeleton";
import { Text } from "../components/Text";

export function PageComponents() {
	return (
		<Container>
			<div className="grid gap-10">
				<div className="flex flex-col gap-2">
					<Text variant="body-sm-bold" className="text-pink-base">
						Olá mundo!
					</Text>
					<Text className="text-green-base">Olá mundo!</Text>
					<Text variant="body-md-bold">Olá mundo!</Text>
					<Text>Levar o dog pra passear</Text>
				</div>

				<div className="flex gap-1">
					<Icon svg={TrashIcon} className="fill-green-base" />
					<Icon svg={CheckIcon} />
					<Icon svg={PlusIcon} />
					<Icon svg={SpinnerIcon} animate className="fill-pink-dark" />
					<Icon svg={PencilIcon} />
					<Icon svg={XIcon} />
				</div>

				<div className="flex gap-1">
					<Badge variant="secondary">5</Badge>
					<Badge variant="primary">2 de 5</Badge>
					<Badge loading />
				</div>

				<div>
					<Button icon={PlusIcon}>Nova Tarefa</Button>
				</div>

				<div className="flex gap-1">
					<ButtonIcon icon={TrashIcon} variant="primary" />
					<ButtonIcon icon={TrashIcon} variant="secondary" />
					<ButtonIcon icon={TrashIcon} variant="tertiary" />
					<ButtonIcon icon={TrashIcon} loading />
				</div>

				<div>
					<InputText placeholder="Digite sua tarefa" />
				</div>

				<div>
					<InputCheckbox />
					<InputCheckbox loading />
				</div>

				<div>
					<Card size="md">Olá Mundo</Card>
				</div>

				<div className="space-y2">
					<Skeleton className="h-6" />
					<Skeleton className="h-6" />
					<Skeleton className="w-96 h-6" />
				</div>
			</div>
		</Container>
	);
}
