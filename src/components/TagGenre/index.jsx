import { TagContainer } from './style';

function TagGender({ value }) {
	let moviesGenre = '';

	value.forEach((val) => {
		switch (val) {
			case 28: {
				moviesGenre += 'Ação ';
				return;
			}
			case 12: {
				moviesGenre += 'Aventura ';
				return;
			}
			case 16: {
				moviesGenre += 'Animação ';
				return;
			}
			case 35: {
				moviesGenre += 'Comédia ';
				return;
			}
			case 80: {
				moviesGenre += 'Crime ';
				return;
			}
			case 99: {
				moviesGenre += 'Documentário ';
				return;
			}
			case 18: {
				moviesGenre += 'Drama ';
				return;
			}
			case 10751: {
				moviesGenre += 'Família';
				return;
			}
			case 14: {
				moviesGenre += 'Fantasia ';
				return;
			}
			case 36: {
				moviesGenre += 'História ';
				return;
			}
			case 27: {
				moviesGenre += 'Terror ';
				return;
			}
			case 10402: {
				moviesGenre += 'Música ';
				return;
			}
			case 9648: {
				moviesGenre += 'Mistério ';
				return;
			}
			case 10749: {
				moviesGenre += 'Romance ';
				return;
			}
			case 878: {
				moviesGenre += 'Ficção ';
				return;
			}
			case 10770: {
				moviesGenre += 'Movie ';
				return;
			}
			case 53: {
				moviesGenre += 'Thriller ';
				return;
			}
			case 10752: {
				moviesGenre += 'Guerra ';
				return;
			}
			case 37: {
				moviesGenre += 'Faroeste ';
				return;
			}

			default: {
				return null;
			}
		}
	});

	return <TagContainer>Gêneros: {moviesGenre}</TagContainer>;
}

export default TagGender;
