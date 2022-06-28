import { FooterWrapper, Content, IconLinkedin, IconGithub } from './style';

function Footer() {
	return (
		<FooterWrapper data-testid='footerWrapper'>
			<Content href='https://www.linkedin.com/in/juliasperandio/'>
				<IconLinkedin />
			</Content>
			<Content href='https://github.com/juuuliaramos'>
				<IconGithub />
			</Content>
		</FooterWrapper>
	);
}
export default Footer;
