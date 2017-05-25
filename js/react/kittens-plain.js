import React from 'react';

import { addKitten } from '../redux/kittens'
import store from '../redux/store' // VANILLA REDUX

export default class KittensPlain extends React.Component {
	constructor (props) {
		super(props)
		this.state = {
			kitties: store.getState().kittens // VANILLA REDUX
		}
	}

	componentDidMount () {
		this.unsubscribeFromRedux = store.subscribe(() => { // VANILLA REDUX
			this.setState({
				kitties: store.getState().kittens // VANILLA REDUX
			})
		})
	}

	componentWillUnmount () {
		this.unsubscribeFromRedux() // VANILLA REDUX
	}

	submit (event) {
		event.preventDefault()
		const name = event.target.name.value
		store.dispatch(addKitten(name)) // VANILLA REDUX
	}

	render () {
		return (
			<div>
				<h2>Kittens with React and Redux</h2>
				<form onSubmit={ this.submit }>
					Name: <input name="name" />
					<button type="submit">add kitteh</button>
				</form>
				<ul>
				{
					this.state.kitties.map(kitty => (
						<li key={ kitty.id }>{ kitty.name }</li>
					))
				}
				</ul>
			</div>
		)
	}
}
