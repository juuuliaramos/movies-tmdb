import { TagContainer } from './style';

function TagGender({ value }) {
	let moviesGenre = '';

	value.forEach((val) => {
		switch (val) {
			case 28: {
				moviesGenre += 'Action ';
				return;
			}
			case 12: {
				moviesGenre += 'Adventure ';
				return;
			}
			case 16: {
				moviesGenre += 'Animation ';
				return;
			}
			case 35: {
				moviesGenre += 'Comedy ';
				return;
			}
			case 80: {
				moviesGenre += 'Crime ';
				return;
			}
			case 99: {
				moviesGenre += 'Documentary ';
				return;
			}
			case 18: {
				moviesGenre += 'Drama ';
				return;
			}
			case 10751: {
				moviesGenre += 'Family ';
				return;
			}
			case 14: {
				moviesGenre += 'Fantasy ';
				return;
			}
			case 36: {
				moviesGenre += 'History ';
				return;
			}
			case 27: {
				moviesGenre += 'Horror ';
				return;
			}
			case 10402: {
				moviesGenre += 'Music ';
				return;
			}
			case 9648: {
				moviesGenre += 'Mystery ';
				return;
			}
			case 10749: {
				moviesGenre += 'Romance ';
				return;
			}
			case 878: {
				moviesGenre += 'Science/Fiction ';
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
				moviesGenre += 'War ';
				return;
			}
			case 37: {
				moviesGenre += 'Western ';
				return;
			}

			default: {
				return null;
			}
		}
	});

	return <TagContainer>{moviesGenre}</TagContainer>;
}

export default TagGender;
