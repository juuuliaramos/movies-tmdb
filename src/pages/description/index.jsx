import { useParams } from 'react-router-dom';

import BackButton from '../../components/BackButton';

function Description() {
	let { id } = useParams();

	return (
		<div>
			<BackButton />
			<p>description {id}</p>
		</div>
	);
}

export default Description;
