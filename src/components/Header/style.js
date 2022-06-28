import styled from 'styled-components';

import { devices } from '../../utils/breakpoints';

export const HeaderWrapper = styled.div`
	width: 100%;
	height: 65px;
	border-radius: 0 0 8px 8px;
	background-color: #5c16c5;

	position: fixed;
	top: 0;

	@media screen and (${devices.mobile}) {
		height: 120px;
	}
`;

export const HeaderContent = styled.div`
	width: 100%;
	max-width: 1280px;
	height: 100%;
	margin: 0 auto;

	display: flex;

	@media screen and (${devices.mobile}) {
		flex-direction: column;
		align-items: center;
		justify-content: center;
	}
`;

export const Image = styled.img`
	width: 250px;
	height: 24px;
	margin: 16px 16px 15px 16px;

	@media screen and (${devices.mobile}) {
		width: 100%;
		height: 20px;
	}
`;
