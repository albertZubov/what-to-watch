import React, { useCallback, useRef, useState } from 'react'
import { HeaderClassNames } from '../../const/const'
import Header from '../header/header'
import HeaderBreadcrumbs from '../header/header-breadcrumbs'

const InputName = {
	rating: 'rating',
	review: 'review-text',
}

const AddReview = () => {
	const titleRating = [...Array(10).keys()].map((el) => ++el)
	const [rating, setRating] = useState(0)
	const [review, setReview] = useState('')
	const formRef = useRef()
	console.log(rating)
	console.log(review)

	const handleSubmit = useCallback((evt) => {
		evt.preventDefault()

		formRef.current.reset()
	})

	const handleFieldChange = useCallback((evt) => {
		evt.preventDefault()

		const { value, name } = evt.target

		switch (name) {
			case InputName.rating:
				setRating(value)
				break

			case InputName.review:
				setReview(value)
				break
		}
	})

	return (
		<section className='film-card film-card--full'>
			<div className='film-card__header'>
				<div className='film-card__bg'>
					<img
						src='img/bg-the-grand-budapest-hotel.jpg'
						alt='The Grand Budapest Hotel'
					/>
				</div>

				<h1 className='visually-hidden'>WTW</h1>

				<Header clHeader={HeaderClassNames.DEFAULT}>
					<HeaderBreadcrumbs />
				</Header>

				<div className='film-card__poster film-card__poster--small'>
					<img
						src='img/the-grand-budapest-hotel-poster.jpg'
						alt='The Grand Budapest Hotel poster'
						width='218'
						height='327'
					/>
				</div>
			</div>

			<div className='add-review'>
				<form
					action='#'
					className='add-review__form'
					onSubmit={handleSubmit}
					ref={formRef}
				>
					<div className='rating'>
						<div className='rating__stars'>
							{titleRating.map((number, index, arr) => (
								<React.Fragment key={number}>
									<input
										className='rating__input'
										id={`star-${arr.length - index}`}
										type='radio'
										name='rating'
										value={arr.length - index}
										onChange={handleFieldChange}
									/>
									<label
										className='rating__label'
										htmlFor={`star-${arr.length - index}`}
									>
										{arr.length - index}
									</label>
								</React.Fragment>
							))}
						</div>
					</div>

					<div className='add-review__text'>
						<textarea
							className='add-review__textarea'
							name='review-text'
							id='review-text'
							placeholder='Review text'
							onChange={handleFieldChange}
						></textarea>
						<div className='add-review__submit'>
							<button className='add-review__btn' type='submit'>
								Post
							</button>
						</div>
					</div>
				</form>
			</div>
		</section>
	)
}

export default AddReview
