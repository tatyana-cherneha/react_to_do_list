import React from 'react'

const Todo = ({text, todo, todos, setTodos}) => {
	//events
	const deleteHandler = () => {
		setTodos(todos.filter(el => el.id !== todo.id))
	}

	const checkHandler = () => {
		setTodos(todos.map((item) => {
			if(item.id === todo.id){
				return {
					...item, completed: !item.completed
				}
			}
			return item;
		}));
	}

	return(
		<div className="todo">
			<li className={`todo-item ${todo.completed ? "completed" : ""}`}>{text}</li>

			<div className="btns-item">
				<button onClick={checkHandler} className="complete-btn"> 
					<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="checkbox"><g data-name="Layer 2"><g data-name="checkmark-square-2"><rect width="24" height="24" transform="rotate(180 12 12)" opacity="0"/><path d="M18 3H6a3 3 0 0 0-3 3v12a3 3 0 0 0 3 3h12a3 3 0 0 0 3-3V6a3 3 0 0 0-3-3zm1 15a1 1 0 0 1-1 1H6a1 1 0 0 1-1-1V6a1 1 0 0 1 1-1h12a1 1 0 0 1 1 1z"/><path d="M14.7 8.39l-3.78 5-1.63-2.11a1 1 0 0 0-1.58 1.23l2.43 3.11a1 1 0 0 0 .79.38 1 1 0 0 0 .79-.39l4.57-6a1 1 0 1 0-1.6-1.22z"/></g></g></svg>
				</button>
				<button onClick={deleteHandler} className="trash-btn">
					<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="trash"><g data-name="Layer 2"><g data-name="trash-2"><rect width="24" height="24" opacity="0"/><path d="M21 6h-5V4.33A2.42 2.42 0 0 0 13.5 2h-3A2.42 2.42 0 0 0 8 4.33V6H3a1 1 0 0 0 0 2h1v11a3 3 0 0 0 3 3h10a3 3 0 0 0 3-3V8h1a1 1 0 0 0 0-2zM10 4.33c0-.16.21-.33.5-.33h3c.29 0 .5.17.5.33V6h-4zM18 19a1 1 0 0 1-1 1H7a1 1 0 0 1-1-1V8h12z"/><path d="M9 17a1 1 0 0 0 1-1v-4a1 1 0 0 0-2 0v4a1 1 0 0 0 1 1z"/><path d="M15 17a1 1 0 0 0 1-1v-4a1 1 0 0 0-2 0v4a1 1 0 0 0 1 1z"/></g></g></svg>
				</button>
			</div>

		</div>
	
	);
}

export default Todo;