import React from 'react'
import PropTypes from 'prop-types'
import { propFilm } from '../../props/props'
import { Link } from 'react-router-dom'
import PlayerVideoPreview from '../player/player-video-preview'

const FilmCardPreview = ({ film }) => {
	// TODO недоделал при наведении - загрузку видео
	// const [isPlaying, setIsPlaying] = useState(false)

	return (
		<article
			className='small-film-card catalog__films-card'
			// onMouseOver={() => setIsPlaying(true)}
			// onMouseLeave={() => setIsPlaying(false)}
		>
			<div className='small-film-card__image'>
				{/* <PlayerVideoPreview film={film} isPlaying={isPlaying} /> */}
				<PlayerVideoPreview film={film} />
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
