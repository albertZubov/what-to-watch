import React, { useEffect, useState } from 'react'
import PropTypes from 'prop-types'
import { propFilm } from '../../props/props'
import { Link } from 'react-router-dom'
import PlayerVideo from '../player/player-video'

const FilmCardPreview = (props) => {
	const { previewImage, name, id } = props.film
	const [currentID, setCurrentID] = useState(0)
	useEffect(() => {}, [])

	return (
		<article
			className='small-film-card catalog__films-card'
			onMouseOver={() => {
				setCurrentID(id)
			}}
			onMouseLeave={() => setCurrentID(0)}
		>
			<div className='small-film-card__image'>
				{!currentID ? (
					<img src={previewImage} alt={name} width='280' height='175' />
				) : (
					<PlayerVideo activeId={id} film={props.film} />
				)}
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
