import React, { ChangeEvent, useRef, useState } from 'react'
import { connect } from 'react-redux'
import { HeaderClassNames } from '../../const/const'
import { getFilm } from '../../store/selectors'
import Header from '../header/header'
import HeaderBreadcrumbs from '../header/header-breadcrumbs'
import { commentsPost } from '../../store/api-actions'
import { StateType } from '../../types/types'
import { useParams } from 'react-router-dom'

const MIN_QUANTITY_SYMBOLS = 50
const MAX_QUANTITY_SYMBOLS = 400
const QUANTITY_ITEMS = 10

const InputName = {
	rating: 'rating',
	review: 'review-text',
}

const arrayNumbers = [...Array(QUANTITY_ITEMS).keys()].map((el) => ++el)

interface PropsType {
	state: StateType
	commentPost: (comment: string, rating: number, id: number) => Promise<string>
}

const AddReview = ({ state, commentPost }: PropsType) => {
	const [rating, setRating] = useState<number>(0)
	const [review, setReview] = useState<string>('')
	const formRef = useRef<HTMLFormElement | null>(null)
	//TODO дублирование - переделать при RTK
	const { id } = useParams()
	const film = id ? getFilm(state, +id) : undefined

	const handleSubmit = (evt: React.FormEvent) => {
		evt.preventDefault()

		if (film) commentPost(review, rating, film.id)

		formRef.current && formRef.current.reset()
	}

	const handleFieldChange = (
		evt: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
	) => {
		const { value, name } = evt.target

		switch (name) {
			case InputName.rating:
				setRating(+value)
				break

			case InputName.review:
				setReview(value)
				break
		}
	}

	return film ? (
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
						src={film.posterImage}
						alt={film.name}
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
							{arrayNumbers.map((number, index, arr) => (
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
										{`Rating ${arr.length - index}`}
									</label>
								</React.Fragment>
							))}
						</div>
					</div>

					<div className='add-review__text'>
						<textarea
							className='add-review__textarea'
							name='review-text'
							maxLength={MAX_QUANTITY_SYMBOLS}
							minLength={MIN_QUANTITY_SYMBOLS}
							id='review-text'
							placeholder='Review text'
							onChange={handleFieldChange}
						></textarea>
						<div className='add-review__submit'>
							<button
								className='add-review__btn'
								type='submit'
								disabled={
									!(
										rating &&
										review.length > MIN_QUANTITY_SYMBOLS &&
										review.length < MAX_QUANTITY_SYMBOLS
									)
								}
							>
								Post
							</button>
						</div>
					</div>
				</form>
			</div>
		</section>
	) : null
}

const mapStateToProps = (state: StateType) => ({
	state: state,
})

const mapDispatchToProps = (dispatch: any) => ({
	commentPost: (comment: string, rating: number, id: number) =>
		dispatch(commentsPost(comment, rating, id)),
})

export default connect(mapStateToProps, mapDispatchToProps)(AddReview)
