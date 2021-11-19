import { filmType } from '../../types/types'
import { extend } from '../../utils/utils'
import { ActionType, TypesActions } from '../action'

const loadData = () => {
	const initialState = {
		films: [],
		filmsSimilar: [],
		comments: [],
		promoFilms: [],
	}

	type InitialState = typeof initialState

	return (state = initialState, action: TypesActions): InitialState => {
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

			case ActionType.LOAD_PROMO_FILMS:
				return extend(state, {
					promoFilms: action.payload,
				})

			case ActionType.CHANGE_FAVORITE: {
				const newFilms = state.films.map((film: filmType) => {
					if (film.id === action.payload.id) return action.payload
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
