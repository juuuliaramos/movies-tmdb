import styled from 'styled-components';

import { devices } from '../../utils/breakpoints';

export const HighlightDescription = styled.div`
	max-width: 1280px;
	height: fit-content;
	margin: 50px auto 20px;
	padding-left: 30px;
	border-radius: 8px;
	background-color: #2d0c5e;
	box-shadow: 0px 8px 20px -3px rgba(0, 0, 0, 0.7);

	@media screen and (${devices.tablet}) {
		width: 100%;
		height: 100%;
		margin: 0 0 20px 0;
	}
`;

export const Wrapper = styled.div`
	max-width: 1280px;
	height: 100%;
	margin: 50px auto 0;
`;

export const DescriptionContainer = styled.div`
	width: 100%;
	max-width: 1280px;
	height: fit-content;
	margin: 0 auto;

	display: flex;

	@media screen and (${devices.tablet}) {
		width: 100%;

		flex-direction: column;
	}
`;

export const Image = styled.img`
	max-width: 350px;
	max-height: 450px;
	border-radius: 16px;
	box-shadow: 0px 8px 20px -3px rgba(0, 0, 0, 0.7);

	@media screen and (${devices.tablet}) {
		margin: 0 auto 20px;
	}
`;

export const DescriptionText = styled.div`
	max-width: 800px;
	height: fit-content;
	margin-left: 20px;
	padding: 20px 30px;
	border-radius: 16px;
	border: 2px solid gray;
	background-color: #4b5358;
	font: 16px Roboto, sans-serif;
	color: #ffffff;
	line-height: 23px;
	box-shadow: 0px 8px 20px -3px rgba(0, 0, 0, 0.7);

	@media screen and (${devices.tablet}) {
		margin: 0 auto 120px;
	}

	p {
		margin-bottom: 8px;
		font-size: 24px;
		font-weight: 900;
	}

	span {
		font-size: 18px;
	}
`;
