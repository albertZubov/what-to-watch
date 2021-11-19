import React, { MouseEventHandler } from 'react'

type propsType = {
	onClickButton: MouseEventHandler<HTMLButtonElement>
}

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
