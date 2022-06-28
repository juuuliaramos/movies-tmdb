import Axios from 'axios';
import { useEffect, useState, useContext } from 'react';
import { useNavigate } from 'react-router-dom';

import { ChoosedMovieContext } from '../../contexts/choosedMovie';
import Footer from '../../components/Footer';
import {
	Wrapper,
	Highlight,
	Title,
	Body,
	MoviesSection,
	MovieCard,
	Image,
	MovieTitle,
	MovieDate,
	Pagination
} from './style';

function Home() {
	const { setChoosedMovie } = useContext(ChoosedMovieContext);

	let navigate = useNavigate();
	const [moviesData, setMoviesData] = useState();

	const baseURL =
		'https://api.themoviedb.org/3/movie/popular?api_key=e271b3e6d4c635865580d551d032131c&page=1';

	useEffect(() => {
		let datas;
		Axios.get(baseURL).then((res) => {
			datas = res.data;
			setMoviesData(datas);
		});
	}, [moviesData]);

	if (!moviesData) return null;

	function HandleClickedCard(element) {
		navigate(`/description/${element.title}`);
		setChoosedMovie(element);
	}

	return (
		<Wrapper>
			<Highlight>
				<Title>
					Milhões de filmes, séries e pessoas para descobrir. Explore já.
				</Title>
			</Highlight>

			<Body>
				<MoviesSection data-testid='moviesSection'>
					{moviesData.results.map((element, key) => {
						return (
							<MovieCard key={key} onClick={() => HandleClickedCard(element)}>
								<Image
									src={`https://image.tmdb.org/t/p/w500${element.poster_path}`}
									alt='ola'
								/>
								<MovieTitle>{element.title}</MovieTitle>
								<MovieDate>{element.release_date}</MovieDate>
							</MovieCard>
						);
					})}
				</MoviesSection>

				<Pagination>1 2 3 4 5 </Pagination>
			</Body>
			<Footer />
		</Wrapper>
	);
}

export default Home;
