/* Styles */
import styled from "styled-components";
import { colors } from "../../../utils/colors";

export const Card = styled.div`
	border: 1px solid ${colors.border};
	border-radius: 8px;
	width: 40vw;
	min-width: 20rem;
	min-height: 0;
	display: flex;
	flex-direction: column;
	overflow: hidden;
`;

export const CardHeader = styled.div`
	display: flex;
	align-items: center;
	font-weight: 450;
	background-image: linear-gradient(to top, ${colors.headerGradientDarker}, ${colors.headerGradientDark}, ${colors.headerGradientLight});
	border-bottom: 1px solid ${colors.border};
	min-height: 3rem;
	justify-content: space-between;
	padding: 0 16px;
`;

export const Icon = styled.div`
	display: flex;
	align-items: center;
	padding-left: 16px;
	:hover {
		cursor: pointer;
	}
`;

export const HeartIcon = styled(Icon)`
	margin-bottom: 24px;
`;

export const CardBody = styled.div`
	padding-bottom: 24px;
	display: flex;
	flex-direction: column;
	flex: 1;
	min-width: 0;
	min-height: 0;
`;

export const Row = styled.div`
	display: flex;
	justify-content: center;
`;

export const ScrollContainer = styled.div`
	min-width: 0;
	min-height: 0;
	overflow: scroll;
	flex: 1;
	margin-bottom: 24px;
	padding: 24px 24px 0 24px;
`;

export const Form = styled.form`
	display: flex;
	flex-direction: column;
`;

export const Label = styled.div<{ error?: boolean }>`
	color: ${({ error }: any) => (error ? colors.error : colors.labelFont)};
	font-weight: ${({ error }: any) => (error ? "bold" : "auto")};
	font-size: 0.75rem;
	margin: 0 0 4px 12px;
`;

export const StringInput = styled.input<{ error?: boolean }>`
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

export const Select = styled.select`
	display: flex;
	flex: 1;
	font-size: 1rem;
	padding: 8px 12px;
	margin-bottom: 24px;
	border: 1px ${colors.inputBorder} solid;
	border-radius: 20px;
	color: grey;
	:focus {
		outline: 1px ${colors.activeBorder} solid;
	}
`;

export const Textarea = styled.textarea`
	font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto", "Oxygen", "Ubuntu", "Cantarell", "Fira Sans", "Droid Sans", "Helvetica Neue",
		sans-serif;
	font-size: 1rem;
	padding: 8px 12px;
	margin-bottom: 24px;
	border: 1px ${colors.inputBorder} solid;
	border-radius: 20px;
	color: grey;
	resize: none;
	min-height: 5rem;
	::placeholder {
		color: ${colors.placeholderFont};
	}
	:focus {
		outline: 1px ${colors.activeBorder} solid;
	}
`;

export const Button = styled.div`
	display: inline-block;
	width: fit-content;
	cursor: pointer;
	color: ${colors.buttonFont};
	font-size: 1rem;
	font-weight: bold;
	padding: 6px 24px;
	text-decoration: none;
	border-radius: 15px;
	border: none;
	background-color: ${colors.acceptButtonBackground};
	:hover {
		background: linear-gradient(to bottom, ${colors.acceptButtonGradientLight} 5%, ${colors.acceptButtonGradientDark} 100%);
		background-color: ${colors.acceptButtonGradientLight};
	}
	:active {
		position: relative;
		top: 1px;
	}
`;

export const DeleteIcon = styled(Icon)`
	margin-bottom: 24px;
`;

export const Block = styled.div`
	background: ${colors.blockBackground};
	border-radius: 24px;
	padding: 24px;
	margin-bottom: 24px;
	font-weight: 300;
	display: flex;
	flex-direction: column;
`;

export const AddNewRow = styled.div`
	display: flex;
	justify-content: flex-start;
	align-items: center;
	font-size: 0.9rem;
`;

export const CircleButton = styled.div`
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
