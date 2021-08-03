import { extend } from '../../utils/utils'
import { ActionType } from '../action'

const loadData = () => {
	const initialState = {
		films: [],
		filmsSimilar: [],
		comments: [],
		promoFilm: {},
	}

	return (state = initialState, action) => {
		switch (action.type) {
			case ActionType.LOAD_FILMS:
				return extend(state, {
					films: action.payload,
				})
			case ActionType.LOAD_FILMS_SIMILAR:
				return extend(state, {
					filmsSimilar: action.payload,
				})
			case ActionType.LOAD_COMMENTS:
				return extend(state, {
					comments: action.payload,
				})

			case ActionType.LOAD_PROMO:
				return extend(state, {
					promoFilm: action.payload,
				})

			case ActionType.CHANGE_FAVORITE: {
				const newFilms = state.films.map((film) => {
					if (film.id === action.payload.id) {
						return action.payload
					}
					return film
				})

				return extend(state, {
					films: newFilms,
					promoFilm: action.payload,
				})
			}
		}

		return state
	}
}

export { loadData }
