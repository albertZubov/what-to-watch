import React from 'react'
import { useAppDispatch } from '../../hooks/hooks'
import { sendFavoriteAction } from '../../store/api-actions'

type PropsType = {
	id: number
	isFavorite: boolean
}

const NamesBtnIcon = {
	add: 'add',
	remove: 'in-list',
}

const ButtonMyList = ({ id, isFavorite }: PropsType): JSX.Element => {
	const btnIcon = isFavorite ? NamesBtnIcon.remove : NamesBtnIcon.add
	const dispatch = useAppDispatch()

	return (
		<button
			className='btn btn--list film-card__button'
			type='button'
			onClick={() => dispatch(sendFavoriteAction({ id, status: !isFavorite }))}
		>
			<svg viewBox='0 0 19 20' width='19' height='20'>
				<use xlinkHref={`#${btnIcon}`}></use>
			</svg>
			<span>My list</span>
		</button>
	)
}

export default ButtonMyList
