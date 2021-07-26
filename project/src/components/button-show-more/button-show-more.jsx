import React from 'react'
import PropTypes from 'prop-types'

const ButtonShowMore = ({ onClickButton }) => {
	return (
		<div className='catalog__more'>
			<button className='catalog__button' type='button' onClick={onClickButton}>
				Show more
			</button>
		</div>
	)
}

ButtonShowMore.propTypes = {
	onClickButton: PropTypes.func.isRequired,
}

export default ButtonShowMore
