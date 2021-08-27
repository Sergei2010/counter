import React, { useState } from 'react'
import Counter from './counter'

const Counters = (props) => {
	/* const [counters, setCounters] = useState([
		{ value: 0, id: 1, name: 'Ложка', disabled: 'disabled' },
		{ value: 4, id: 2, name: 'Вилка', disabled: '' },
		{ value: 0, id: 3, name: 'Тарелка', disabled: 'disabled' },
		{
			value: 0,
			id: 4,
			name: 'Стартовый набор минималиста',
			disabled: 'disabled',
		},
		{ value: 0, id: 5, name: 'Ненужные вещи', disabled: 'disabled' },
	])

	const handlerDisabled = () => {
		const newCounters = counters.map(c => {
			return c.value === 0
				? Object.assign(c, { disabled: 'disabled' })
				: Object.assign(c, { disabled: '' })
		})
		setCounters(newCounters)
	}

	const handleIncrement = counterId => {
		const newCounters = counters.map(c => {
			return c.id === counterId
				? Object.assign(c, { value: c.value + 1, disabled: '' })
				: c
		})
		setCounters(newCounters)
	}

	const handleDecrement = counterId => {
		const newCounters = counters.map(c => {
			return c.id === counterId
				? c.disabled === 'disabled'
					? c
					: Object.assign(c, { value: c.value - 1 })
				: c
		})
		setCounters(newCounters)
		handlerDisabled()
	}

	const handleDelete = counterId => {
		const newCounters = counters.filter(c => c.id !== counterId)
		setCounters(newCounters)
	}

	const handleReset = () => setCounters(initialState) */

	return (
		<div>
			<button
			onClick={props.onReset}
			className='btn btn-primary btn-sm m-2'
			>
				Сброс
			</button>
			{props.counters.map(counter => (
				<Counter
					key={counter.id}
					onIncrement={props.onIncrement}
					onDecrement={props.onDecrement}
					onDelete={props.onDelete}
					{...counter}
				/>
			))}
		</div>
	)
}

export default Counters
