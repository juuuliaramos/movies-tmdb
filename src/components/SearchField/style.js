import styled from 'styled-components';

import { devices } from '../../utils/breakpoints';

export const WrapperSearchField = styled.div`
	width: 100%;
	height: 100%;
	padding-left: 50px;

	display: flex;
	align-items: center;

	@media screen and (${devices.mobile}) {
		width: fit-content;
		padding: 0;
	}
`;

export const Input = styled.input`
	width: 220px;
	height: 30px;
	padding: 8px 10px;
	border: none;
	border-radius: 8px;
	outline: none;
	font-size: 16px;

	@media screen and (${devices.mobile}) {
		width: 100%;
	}
`;
