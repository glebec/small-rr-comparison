import React from 'react';
import { connect } from 'react-redux' // REACT-REDUX
import { addKitten } from '../redux/kittens'

class KittensConnect extends React.Component {

	constructor (props) {
		super(props)
		this.submit = this.submit.bind(this)
	}

	submit (event) {
		event.preventDefault()
		const name = event.target.name.value
		this.props.addKitten(name) // FROM REACT-REDUX CONNECT
	}

	render () {
		return (
			<div>
				<h2>Kittens with React-Redux</h2>
				<form onSubmit={ this.submit }>
					Name: <input name="name" />
					<button type="submit">add kitteh</button>
				</form>
				<ul>
				{
					this.props.kitties.map(kitty => ( // FROM REACT-REDUX CONNECT
						<li key={ kitty.id }>{ kitty.name }</li>
					))
				}
				</ul>
			</div>
		)
	}
}

// REACT-REDUX BELOW

const mapStateToProps = state => ({
	kitties: state.kittens
})

const mapDispatchToProps = dispatch => ({
	addKitten: name => dispatch(addKitten(name))
})

export default connect(mapStateToProps, mapDispatchToProps)(KittensConnect)
