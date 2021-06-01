import React from 'react'

const Form = ({setInputText, todos, setTodos, inputText}) => {
	//here js code

	const inputTextHandler = (e) => {
		// console.log(e.target.value);
		setInputText(e.target.value);
	}

	const submitTodoHandler = (e) => {
		e.preventDefault();
		setTodos([
			...todos, 
			{text: inputText, completed: false, id: Math.random()*1000 }
		]);
		setInputText("");
	}

	return (
		<form>
			<div className="form-item">
				<input 
					value={inputText} 
					onChange={inputTextHandler} 
					type="text" 
					className="todo-input" 
					placeholder="add todo item"
				/>
				<button 
					onClick={submitTodoHandler} 
					className="add-btn" 
					type="submit"
				>Add</button>
			</div>
		</form>
	);
}

export default Form;