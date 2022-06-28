import styled from 'styled-components';
import { TbBrandLinkedin } from 'react-icons/tb';

export const FooterWrapper = styled.div`
	width: 100%;
	height: fit-content;
	background-color: #5c16c5;
	margin: 0 auto;

	position: static;
	bottom: 0;
`;

export const Content = styled.a`
	width: 100%;
	max-width: 1260px;
	height: 50px;
	margin: 0 auto;

	display: flex;
	justify-content: center;

	/* a:link,
	a:active,
	a:visited {
		text-decoration: none;
		font-size: 16px;
		font-family: Roboto, sans-serif;
	} */
`;

export const Icon = styled(TbBrandLinkedin)`
	width: 34px;
	height: 50px;
`;
