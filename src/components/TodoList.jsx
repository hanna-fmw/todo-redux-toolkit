import React from 'react'
import { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { addTodo, deleteTodo, toggleTodo } from '../redux/todoSlice'
import TodoItem from './TodoItem'

function TodoList() {
	const [userInput, setUserInput] = useState('')

	const dispatch = useDispatch()
	const todos = useSelector((state) => state.todos)

	const newItem = {
		id: Date.now(),
		title: userInput.trim(),
		done: false,
	}

	function handleOnClick() {
		if (userInput.trim()) {
			dispatch(addTodo(newItem))
			setUserInput('')
		}
	}

	function handleKeypress(e) {
		if (e.key === 'Enter') {
			handleOnClick()
		}
	}

	function handleDelete(id) {
		dispatch(deleteTodo(id))
	}

	function handleToggle(id) {
		dispatch(toggleTodo(id))
	}

	return (
		<div className='container'>
			<div className='todo-header'>
				<label>
					<input
						type='text'
						value={userInput}
						placeholder='Add a new todo...'
						onChange={(e) => setUserInput(e.target.value)}
						onKeyDown={handleKeypress}
						className='input-value'
					/>
				</label>
				<button onClick={handleOnClick} type='button' className='add-btn'>
					+
				</button>
			</div>

			{todos.map((todo) => (
				<div key={todo.id} className='todo-list'>
					<TodoItem todo={todo} onDelete={handleDelete} onToggle={handleToggle} />
				</div>
			))}
		</div>
	)
}

export default TodoList
