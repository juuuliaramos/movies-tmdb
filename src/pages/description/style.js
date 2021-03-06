import styled from 'styled-components';

import { devices } from '../../utils/breakpoints';

export const Wrapper = styled.div`
	width: 100vw;
	height: 100%;
	margin: 50px auto 0;

	@media screen and (${devices.tablet}) {
		max-width: 100%;
		margin: 60px auto 0;
	}

	@media screen and (${devices.mobile}) {
		max-width: 100%;
		margin: 110px 0 0;
	}
`;

export const HighlightDescription = styled.div`
	max-width: 1280px;
	height: fit-content;
	margin: 60px auto 20px;
	padding-left: 30px;
	border-radius: 8px;
	background-color: #2d0c5e;
	box-shadow: 0px 8px 20px -3px rgba(0, 0, 0, 0.7);

	display: flex;
	align-items: center;

	@media screen and (${devices.tablet}) {
		max-width: 80%;
		height: 100%;
		margin: 0 auto 20px;
	}
`;

export const HighlightText = styled.p`
	width: 100%;
	height: 100%;
	margin: 0 0 0 20px;
	color: #ffffff;
	font-size: 16px;
`;

export const DescriptionContainer = styled.div`
	width: calc(100% - 40px);
	max-width: 1280px;
	height: fit-content;
	margin: 0 auto;

	display: flex;

	@media screen and (${devices.tablet}) {
		max-width: calc(100% - 40px);

		flex-direction: column;
	}

	@media screen and (${devices.mobile}) {
		width: 100%;
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

	@media screen and (${devices.mobile}) {
		width: 100%;
		margin: 0 auto 20px;
	}
`;

export const DescriptionText = styled.div`
	max-width: 100%;
	height: fit-content;
	margin-left: 20px;
	padding: 20px 30px;
	border-radius: 16px;
	border: 2px solid gray;
	background-color: blueviolet;
	font: 16px Roboto, sans-serif;
	color: #ffffff;
	line-height: 23px;
	box-shadow: 0px 8px 20px -3px rgba(0, 0, 0, 0.7);

	@media screen and (${devices.tablet}) {
		max-width: calc(100% - 60px);
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
