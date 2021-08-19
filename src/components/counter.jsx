import React, { useState } from 'react'

const Counter = () => {
	const [count, setCount] = useState(0)
	const [disabled, setDisabled] = useState('')
	const tags = []

	const formCount = () => {
		return count === 0 ? 'Ноль' : count
	}
	const getBadgeClasses = () => {
		let classes = 'badge m-2 bg-'
		classes += count === 0 ? 'danger' : 'primary'
		return classes
	}
	const renderTags = () => {
		if (tags.length === 0) return 'Тегов нет.'
		return tags.map(tag => <li key={tag}>{tag}</li>)
	}
	const handleIncrement = productId => {
		console.log('productId: ', productId)
		setCount(count + 1)
	}
	const handleDecrement = () => {
		console.log('count: ', count)
		setCount(count - 1)
		return count > 1 ? console.log('Больше нуля') : setDisabled('disabled')
	}
	return (
		<>
			{tags.length === 0 && 'Теги не найдены.'}
			{renderTags()}
			<span className={getBadgeClasses()}>{formCount()}</span>
			<button
				onClick={() => handleIncrement({ id: 1 })}
				className='btn btn-secondary btn-sm'
			>
				Increment
			</button>
			<button
				onClick={() => handleDecrement()}
				className = 'btn btn-secondary btn-sm'
				disabled = {disabled}
			>
				Decrement
			</button>
		</>
	)
}

export default Counter
