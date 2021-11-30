import React from 'react'
import { connect } from 'react-redux'
import { favoritePost } from '../../store/api-actions'
import { FilmType } from '../../types/types'

type PropsType = {
	setFavorite: (id: number, status: boolean) => Promise<FilmType>
	id: number
	isFavorite: boolean
}

const NamesBtnIcon = {
	add: 'add',
	remove: 'in-list',
}

const ButtonMyList = ({ setFavorite, id, isFavorite }: PropsType) => {
	const btnIcon = isFavorite ? NamesBtnIcon.remove : NamesBtnIcon.add

	return (
		<button
			className='btn btn--list film-card__button'
			type='button'
			onClick={() => setFavorite(id, !isFavorite)}
		>
			<svg viewBox='0 0 19 20' width='19' height='20'>
				<use xlinkHref={`#${btnIcon}`}></use>
			</svg>
			<span>My list</span>
		</button>
	)
}

const mapDispatchToProps = (dispatch: any) => ({
	setFavorite: (id: number, status: boolean) =>
		dispatch(favoritePost(id, status)),
})

export default connect(null, mapDispatchToProps)(ButtonMyList)
