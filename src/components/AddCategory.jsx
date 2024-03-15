import { useState } from "react"



export const AddCategory = ({ setCategories }) => {

	const [ inputValue, setInputValue ] = useState('One Pusch')

	const onInputChange = ({ target }) => {
		setInputValue( target.value );
	}

	const onSubmit = ( event ) => {
		event.preventDefault();

		if( inputValue.trim().length <=  1 ) return;

		setCategories( categories => [ inputValue, ...categories ]);
		//! no anda
		setInputValue('');
		
	}

  return (
		<form onSubmit={ onSubmit }>
			<input 
				type="text" 
				placeholder={ inputValue }
				onChange={ onInputChange }
			/>
		</form>
  )
}
