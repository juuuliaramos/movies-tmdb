import styled from 'styled-components';
import { TbBrandLinkedin } from 'react-icons/tb';
import { AiFillGithub } from 'react-icons/ai';

export const FooterWrapper = styled.div`
	width: 100%;
	height: 60px;
	background-color: #5c16c5;
	margin: 0 auto;
	border-radius: 8px 8px 0 0;

	position: fixed;
	bottom: 0;

	display: flex;
	justify-content: center;
	align-items: center;
`;

export const Content = styled.a`
	width: 40px;
	height: 40px;
	text-decoration: none;
	border-radius: 8px;
	background-color: white;

	a:link,
	a:active,
	a:visited,
	a:hover {
		text-decoration: none;
		cursor: pointer;
	}
`;

export const IconLinkedin = styled(TbBrandLinkedin)`
	width: 40px;
	height: 40px;
`;

export const IconGithub = styled(AiFillGithub)`
	width: 40px;
	height: 40px;
`;
