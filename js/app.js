import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux' // REACT-REDUX

import store from './redux/store'
import KittensPlain from './react/kittens-plain'
import KittensConnect from './react/kittens-connect'
import KittensConnectFunctional from './react/kittens-connect-functional'

console.log('🐱🐱🐱')

ReactDOM.render( // Provider from REACT-REDUX; could be omitted for plain
	<Provider store={store}>
		<div>
			<h1>Meow!</h1>
			<hr />
			<KittensPlain />
			<hr />
			<KittensConnect />
			<hr />
			<KittensConnectFunctional />
		</div>
	</Provider>,
	document.querySelector('#app')
)
