import React, { useState } from 'react'
import Counters from './components/counters'
import NavBar from './components/navBar'

function App() {
	const initialState = [
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
	]
	const[counters, setCounters] = useState(initialState)

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

	/* const handleIncrement = counterId => {
		const newCounters = [...counters]
		const elementIndex = counters.filter(c => c.id === counterId)
		newCounters[elementIndex].value++
		setCounters(newCounters)
	} */

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

	/* const handleDecrement = (counterId) => {
		const newCounters = [...counters]
		const elementIndex = counters.filter(c => c.id === counterId)
		newCounters[elementIndex].value--
		setCounters(newCounters)
	} */

	const handleDelete = (counterId) => {
		const newCounters = counters.filter(c => c.id !== counterId)
		setCounters(newCounters)
	}

	const handleReset = () => setCounters(initialState)
	return (
		<div className='col-lg-8 mx-auto p-3 py-md-5'>
			<main>
				<NavBar totalItems={counters.reduce((a,c)=>a+c.value,0)}/>
				<Counters
					onIncrement={handleIncrement}
					onDecrement={handleDecrement}
					onDelete={handleDelete}
					onReset={handleReset}
					counters={counters}
				/>
			</main>
		</div>
	)
}

export default App
