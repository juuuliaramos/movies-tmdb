// import { useParams } from 'react-router-dom';
import { useContext } from 'react';

import { ChoosedMovieContext } from '../../contexts/choosedMovie';
import BackButton from '../../components/BackButton';
import TagGender from '../../components/TagGenre';
import {
	HighlightDescription,
	Wrapper,
	DescriptionContainer,
	Image,
	DescriptionText
} from './style';

function Description() {
	const { choosedMovie } = useContext(ChoosedMovieContext);

	// console.log(choosedMovie);

	return (
		<Wrapper>
			<HighlightDescription>
				<BackButton />
			</HighlightDescription>
			<DescriptionContainer>
				<Image
					src={`https://image.tmdb.org/t/p/w500${choosedMovie.poster_path}`}
					alt='ola'
				/>
				<DescriptionText>
					<TagGender value={choosedMovie.genre_ids} />
					<p>Título: </p>
					<span>{choosedMovie.title}</span>
					<p>Lançamento: </p>
					<span>{choosedMovie.release_date}</span>
					<p>Resumo: </p>
					<span>{choosedMovie.overview}</span>
					<p>Nota:</p>
					<span> {choosedMovie.vote_average}</span>
				</DescriptionText>
			</DescriptionContainer>
		</Wrapper>
	);
}

export default Description;
