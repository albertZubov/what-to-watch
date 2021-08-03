import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { favoritePost } from '../../store/api-actions'

const NamesBtnIcon = {
	add: 'add',
	remove: 'in-list',
}

const ButtonMyList = ({ setFavorite, id, isFavorite }) => {
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

ButtonMyList.propTypes = {
	id: PropTypes.number.isRequired,
	isFavorite: PropTypes.bool.isRequired,
	setFavorite: PropTypes.func.isRequired,
}

const mapDispatchToProps = (dispatch) => ({
	setFavorite: (id, status) => dispatch(favoritePost(id, status)),
})

export default connect(null, mapDispatchToProps)(ButtonMyList)
