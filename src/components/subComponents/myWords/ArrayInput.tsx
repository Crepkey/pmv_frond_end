import { Fragment, useState } from "react";

// Icons
import { BsTrash, BsPlus } from "react-icons/bs";

// Styles
import { Label, Block, Row, StringInput, DeleteIcon, AddNewRow, CircleButton } from "./styles";

interface ArrayInputProps {
	hasError?: boolean;
	label: string;
	placeholder: string;
	keyString: string;
	array: any[];
	onChange: (e: any, i: number) => void;
	addNewElem: (e: any, i: number) => void;
	removeElem: (e: any, i: number) => void;
}

export default function ArrayInput({ hasError, label, placeholder, keyString, array, onChange, addNewElem, removeElem }: ArrayInputProps) {
	const [autoFocus, setAutofocus] = useState<string>("");

	return (
		<Fragment>
			<Label error={hasError}>{label}</Label>
			<Block>
				{array.map((hun: any, i: number) => {
					const key = `${i}_${keyString}`;
					return (
						<Row key={key}>
							<StringInput
								autoFocus={autoFocus === key}
								error={hasError && i === 0}
								placeholder={placeholder}
								value={hun.meaning}
								onChange={(e) => onChange(e, i)}
								onKeyDown={(e) => {
									if (e.key === "Enter") {
										addNewElem(e, i);
										setAutofocus(`${i + 1}_${keyString}`);
									}
								}}
							/>
							{i !== 0 && (
								<DeleteIcon>
									<BsTrash onClick={(e) => removeElem(e, i)} />
								</DeleteIcon>
							)}
						</Row>
					);
				})}
				<AddNewRow>
					<CircleButton
						onClick={(e) => {
							addNewElem(e, array.length - 1);
							setAutofocus(`${array.length}_${keyString}`);
						}}>
						<BsPlus />
					</CircleButton>
					{`Add one more ${label.substring(0, label.length - 1)}`}
				</AddNewRow>
			</Block>
		</Fragment>
	);
}
