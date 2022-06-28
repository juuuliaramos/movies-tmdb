import { WrapperSearchField, Input } from './style';

function SearchField() {
	return (
		<WrapperSearchField>
			<Input
				name='search'
				placeholder='Buscar...'
				type='text'
				autoComplete='off'
				data-testid='inputSearch'
			/>
		</WrapperSearchField>
	);
}

export default SearchField;
