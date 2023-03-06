import React from 'react'
import { TiDeleteOutline } from 'react-icons/ti'
import { TbSquareCheck } from 'react-icons/tb'
import { CgUndo } from 'react-icons/cg'

function TodoItem({ todo, onDelete, onToggle }) {
	return (
		<div className='todo-item'>
			<span style={{ textDecoration: todo.done && 'line-through' }}>{todo.title}</span>
			<div className='todo-btns'>
				<button onClick={() => onToggle(todo.id)} className='del-btn'>
					{todo.done ? (
						<div style={{ color: 'white' }}>
							<CgUndo size={'20px'} />
						</div>
					) : (
						<div className='done-icon' style={{ color: '#8AFF8A' }}>
							<TbSquareCheck size={'20px'} />
						</div>
					)}
				</button>
				<button onClick={() => onDelete(todo.id)} className='del-btn'>
					<TiDeleteOutline size={'20px'} />
				</button>
			</div>
		</div>
	)
}

export default TodoItem
