import { Fragment, useState } from "react";

/* Styles */
import styled from "styled-components";
import { colors } from "../../../utils/colors";

// Icons
import { BsTrash, BsPlus } from "react-icons/bs";

const Icon = styled.div`
	display: flex;
	align-items: center;
	padding-left: 16px;
	:hover {
		cursor: pointer;
	}
`;

const DeleteIcon = styled(Icon)`
	margin-bottom: 24px;
`;

const Row = styled.div`
	display: flex;
	justify-content: center;
`;

const Block = styled.div`
	background: ${colors.blockBackground};
	border-radius: 24px;
	padding: 24px;
	margin-bottom: 24px;
	font-weight: 300;
	display: flex;
	flex-direction: column;
`;

const Label = styled.div<{ error?: boolean }>`
	color: ${({ error }: any) => (error ? colors.error : colors.labelFont)};
	font-weight: ${({ error }: any) => (error ? "bold" : "auto")};
	font-size: 0.75rem;
	margin: 0 0 4px 12px;
`;

const StringInput = styled.input<{ error?: boolean }>`
	display: flex;
	flex: 1;
	font-size: 1rem;
	padding: 8px 12px;
	margin-bottom: 24px;
	border: ${({ error }: any) => (error ? `2px solid ${colors.error}` : `1px ${colors.inputBorder} solid`)};
	border-radius: 20px;
	color: grey;
	::placeholder {
		color: ${colors.placeholderFont};
	}
	:focus {
		outline: ${({ error }: any) => (error ? `none` : `1px ${colors.activeBorder} solid`)};
	}
`;

const AddNewRow = styled.div`
	display: flex;
	justify-content: flex-start;
	align-items: center;
	font-size: 0.9rem;
`;

const CircleButton = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	padding: 4px;
	border-radius: 100%;
	margin-right: 8px;
	cursor: pointer;
	color: ${colors.buttonFont};
	font-size: 1rem;
	text-decoration: none;
	background-color: ${colors.buttonBackground};
	border: none;
	:hover {
		background: linear-gradient(to bottom, ${colors.buttonGradientLight} 5%, ${colors.buttonGradientDark} 100%);
		background-color: ${colors.buttonGradientLight};
	}
	:active {
		position: relative;
		top: 1px;
	}
`;

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
