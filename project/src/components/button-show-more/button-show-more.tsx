import React, { MouseEventHandler } from 'react'

type PropsType = {
	onClickButton: MouseEventHandler<HTMLButtonElement>
}

const ButtonShowMore = ({ onClickButton }: PropsType): JSX.Element => {
	return (
		<div className='catalog__more'>
			<button className='catalog__button' type='button' onClick={onClickButton}>
				Show more
			</button>
		</div>
	)
}

export default ButtonShowMore
