import headerImage from '../../assets/Header/header-logo.svg';
import SearchField from '../SearchField';
import { HeaderWrapper, HeaderContent, Image } from './style';

function Header() {
	return (
		<HeaderWrapper data-testid='headerWrapper'>
			<HeaderContent data-testid='headerContent'>
				<Image src={headerImage} data-testid='image' />
				<SearchField />
			</HeaderContent>
		</HeaderWrapper>
	);
}
export default Header;
