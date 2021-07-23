import React, { useState } from 'react'
import PropTypes from 'prop-types'
import { propFilm } from '../../props/props'
import { Link } from 'react-router-dom'
import PlayerVideo from '../player/player-video'

const FilmCardPreview = ({ film }) => {
	const [isPlaying, setIsPlaying] = useState(false)

	return (
		<article
			className='small-film-card catalog__films-card'
			onMouseOver={() => setIsPlaying(true)}
			onMouseLeave={() => setIsPlaying(false)}
		>
			<div className='small-film-card__image'>
				<PlayerVideo film={film} isPlaying={isPlaying} />
			</div>
			<h3 className='small-film-card__title'>
				<Link
					to={`/films/${film.id}`}
					className='small-film-card__link'
					href='film-page.html'
				>
					{film.name}
				</Link>
			</h3>
		</article>
	)
}

FilmCardPreview.propTypes = {
	film: PropTypes.shape(propFilm),
}

export default FilmCardPreview
