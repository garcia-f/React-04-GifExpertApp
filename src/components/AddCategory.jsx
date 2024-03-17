import { useState } from "react"



export const AddCategory = ({ onNewCategory }) => {

	const [ inputValue, setInputValue ] = useState('')

	const onInputChange = ({ target }) => {
		setInputValue( target.value );
	}

	const onSubmit = ( event ) => {
		event.preventDefault();

		const  inputNewValue = inputValue.trim();

		if( inputNewValue.length <=  1 ) return;

		onNewCategory( inputNewValue );
		setInputValue('');
		
	}

  return (
		<form onSubmit={ onSubmit }>
			<input 
				type="text" 
				placeholder="Buscar gifs"
				onChange={ onInputChange }
				value={inputValue}
			/>
		</form>
  )
}
