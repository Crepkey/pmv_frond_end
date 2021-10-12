import { Fragment } from "react";
import styled from "styled-components";

export const ModalBackgroundCover = styled.div`
	background: rgba(0, 0, 0, 0.6);
	backdrop-filter: blur(2px);
	position: absolute;
	top: 0;
	left: 0;
	right: 0;
	bottom: 0;
	z-index: 1;
`;

export const ModalContainer = styled.div`
	background: white;
	border: 1px solid #ccc;
	border-radius: 4px;
	position: absolute;
	top: 25%;
	left: 50%;
	transform: translate(-50%);
	min-width: 30rem;
	z-index: 2;
`;

export const CloseButton = styled.button`
	background: none;
	border: none;
	position: absolute;
	top: 0;
	right: 0;
	z-index: 1;
	svg {
		font-size: 1.5em;
	}
	&:hover {
		cursor: pointer;
	}
`;

export default function Modal() {
	return (
		<Fragment>
			<ModalBackgroundCover />
			<ModalContainer>
				<CloseButton>X</CloseButton>
				<div>
					Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque gravida nibh eget sapien rutrum, in mollis urna porta. Integer
					convallis ex sed leo condimentum semper. Donec a ex sit amet urna elementum scelerisque at ut elit. Proin ac mauris fermentum,
					aliquet nisi eu, maximus ante. Curabitur aliquam lacinia efficitur. Quisque mattis suscipit magna, at bibendum diam dictum
					maximus. Sed egestas viverra laoreet. Maecenas semper metus et lectus pellentesque, nec dictum felis dignissim. Fusce iaculis
					tincidunt vulputate. Vivamus ullamcorper mauris quis laoreet dignissim. Aliquam consequat mi dolor, vitae vulputate sapien varius
					vel. Cras eget luctus elit. Phasellus condimentum eleifend diam, eget convallis odio sollicitudin eget. Sed fringilla orci
					eleifend leo pulvinar, nec ultricies neque ornare. Praesent id risus eu turpis tempus tincidunt lobortis nec mauris. Ut feugiat,
					odio in tempor vehicula, libero dui finibus orci, eu ultrices arcu augue ut mi. Phasellus posuere, elit eu rutrum ullamcorper,
					risus velit lobortis ante, semper mollis nibh elit varius nisl. Mauris et lorem ac nunc lacinia volutpat sed quis velit. Orci
					varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Mauris gravida lacus eget metus rutrum
					convallis. Cras quis elit enim. Vestibulum eget finibus ligula, ac pretium magna. Aliquam suscipit tincidunt scelerisque.
					Pellentesque cursus interdum arcu sodales fringilla. Aenean fermentum vitae libero non lacinia.
				</div>
			</ModalContainer>
		</Fragment>
	);
}
