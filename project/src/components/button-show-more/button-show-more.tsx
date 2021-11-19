import React, { MouseEventHandler } from 'react'

type propsType = {
	onClickButton: MouseEventHandler<HTMLButtonElement>
}

// TODO: переименовать все питы на верхний регистр

const ButtonShowMore = ({ onClickButton }: propsType) => {
	return (
		<div className='catalog__more'>
			<button className='catalog__button' type='button' onClick={onClickButton}>
				Show more
			</button>
		</div>
	)
}

export default ButtonShowMore
