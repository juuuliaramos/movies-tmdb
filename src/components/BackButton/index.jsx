import { useNavigate } from 'react-router-dom';

import { BackButtonWrapper } from './style';

function BackButton() {
	let navigate = useNavigate();

	function HandleClickedButton() {
		navigate('/');
	}

	return (
		<BackButtonWrapper
			onClick={HandleClickedButton}
			data-testid='BackButtonWrapper'
		>
			Voltar
		</BackButtonWrapper>
	);
}

export default BackButton;
