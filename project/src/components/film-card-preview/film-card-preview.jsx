import React, { useState } from 'react'
import PropTypes from 'prop-types'
import { propFilm } from '../../props/props'
import { Link } from 'react-router-dom'

const FilmCardPreview = (props) => {
	const { previewImage, name, id } = props.film
	const [currentID, setCurrentID] = useState(0)
	console.log(currentID)

	return (
		<article
			className='small-film-card catalog__films-card'
			onMouseOver={() => setCurrentID(id)}
			onMouseLeave={() => setCurrentID(0)}
		>
			<div className='small-film-card__image'>
				<img src={previewImage} alt={name} width='280' height='175' />
			</div>
			<h3 className='small-film-card__title'>
				<Link
					to={`/films/${id}`}
					className='small-film-card__link'
					href='film-page.html'
				>
					{name}
				</Link>
			</h3>
		</article>
	)
}

FilmCardPreview.propTypes = {
	film: PropTypes.shape(propFilm),
}

export default FilmCardPreview
