// kitten factory

let id = 0
const kitten = name => ({ id: id++, name })

// actions

const ADD_KITTEN = 'ADD_KITTEN'

// action creators

export const addKitten = name => ({
	type: ADD_KITTEN,
	kitten: kitten(name)
})

// reducer

const initial = [
	kitten('Mittens'),
	kitten('Snuggles')
]

export default function reducer (kittens = initial, action) {
	switch (action.type) {
		case ADD_KITTEN:
			return kittens.concat(action.kitten)
		default:
			return kittens
	}
}
