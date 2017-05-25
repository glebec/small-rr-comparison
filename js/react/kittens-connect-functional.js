import React from 'react';
import { connect } from 'react-redux' // REACT-REDUX
import { addKitten } from '../redux/kittens'

const KittensConnect = props => {

	const submit = (event) => {
		event.preventDefault()
		const name = event.target.name.value
		props.addKitten(name) // FROM REACT-REDUX CONNECT (MAP DISPATCH)
	}

	return (
		<div>
			<h2>Kittens with React-Redux (Functional)</h2>
			<form onSubmit={ submit }>
				Name: <input name="name" />
				<button type="submit">add kitteh</button>
			</form>
			<ul>
			{
				props.kitties.map(kitty => ( // FROM REACT-REDUX CONNECT (MAP STATE)
					<li key={ kitty.id }>{ kitty.name }</li>
				))
			}
			</ul>
		</div>
	)
}

// REACT-REDUX

const mapStateToProps = state => ({
	kitties: state.kittens
})

const mapDispatchToProps = dispatch => ({
	addKitten: name => dispatch(addKitten(name))
})

export default connect(mapStateToProps, mapDispatchToProps)(KittensConnect)
