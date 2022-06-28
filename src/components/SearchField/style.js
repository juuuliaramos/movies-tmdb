import styled from 'styled-components';

import { devices } from '../../utils/breakpoints';

export const WrapperSearchField = styled.div`
	width: 100%;
	height: 100%;

	display: flex;
	align-items: center;
	/* margin: 0 auto; */

	/* @media screen and (${devices.tablet}) {
		max-width: 100%;
		/* margin: 0 0 20px 0; */
`;

export const Input = styled.input`
	width: 220px;
	height: 30px;
	padding: 8px 10px;
	border: none;
	border-radius: 8px;
	outline: none;
	font-size: 16px;
	/* margin: 50px auto 0; */
`;
