import styled from 'styled-components';

import { devices } from '../../utils/breakpoints';

export const Wrapper = styled.div`
	display: flex;
	flex-direction: column;
	flex-wrap: wrap;
	background-color: #dedbe6;
`;

export const Highlight = styled.div`
	width: 100%;
	height: 300px;
	margin: 0 auto;
	background-color: #2d0c5e;

	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;

	@media screen and (${devices.mobile}) {
		height: fit-content;
		padding-bottom: 36px;
	}
`;

export const Title = styled.p`
	width: 100%;
	max-width: 850px;
	height: fit-content;
	margin: 0 auto;
	color: #ffffff;
	font: 48px Roboto, sans-serif;
	letter-spacing: -0.005em;
	font-weight: 700;
	line-height: 56px;

	@media screen and (${devices.tablet}) {
		max-width: calc(100% - 32px);
		margin: 40px auto 36px;
		font-size: 36px;
	}

	@media screen and (${devices.mobile}) {
		max-width: calc(100% - 26px);
		font-size: 24px;
		line-height: 28px;
	}
`;

export const Body = styled.div`
	width: calc(100% - 32px);
	max-width: 1260px;
	margin: 0 auto 50px;

	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
`;

export const MoviesSection = styled.div`
	width: fit-content;
	height: fit-content;
	margin: 29px auto 0;

	display: flex;
	flex-wrap: wrap;
	gap: 32px;

	@media screen and (${devices.mobile}) {
		gap: 16px;
	}
`;

export const MovieCard = styled.div`
	max-width: 176px;
	width: fit-content;
	height: 264px;
	margin: 0 auto 104px;
	background-color: #ffffff;
	cursor: pointer;

	@media screen and (${devices.mobile}) {
		width: 156px;
		height: 232px;
		margin: 0 auto 80px;
	}
`;

export const Image = styled.img`
	width: 100%;
	height: 100%;
	border-radius: 4px;
`;

export const MovieTitle = styled.div`
	width: fit-content;
	height: fit-content;
	margin: 8px 0 0;
	color: #000000;
	font: 16px Roboto, sans-serif;
	font-weight: 700;
	line-height: 24px;

	@media screen and (${devices.mobile}) {
		font-size: 14px;
	}
`;

export const MovieDate = styled.p`
	width: fit-content;
	height: fit-content;
	margin: 0;
	color: #646464;
	font: 14px Roboto, sans-serif;
	font-weight: 700;
	line-height: 24px;

	@media screen and (${devices.mobile}) {
		font-size: 12px;
	}
`;

export const Pagination = styled.p`
	width: fit-content;
	height: fit-content;
	margin: 40px auto 0;
	color: #646464;
	font: 14px Roboto, sans-serif;
	font-weight: 700;
	line-height: 24px;
`;
