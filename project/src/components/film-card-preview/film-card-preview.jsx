import React, { useRef, useState } from 'react'
import PropTypes from 'prop-types'
import { propFilm } from '../../props/props'
import { Link } from 'react-router-dom'
import PlayerVideoPreview from '../player/player-video-preview'

const FilmCardPreview = ({ film }) => {
	const videoRef = useRef(null)
	const [isPending, setIsPending] = useState(false)

	const onPlayVideo = () => {
		if (isPending) return
		videoRef.current.play().then(setIsPending).catch(setIsPending)
	}

	const onPauseVideo = () => {
		if (isPending) return
		videoRef.current.load()
	}

	return (
		<article className='small-film-card catalog__films-card'>
			<Link to={`/films/${film.id}`}>
				<div
					className='small-film-card__image'
					onMouseOver={onPlayVideo}
					onMouseLeave={onPauseVideo}
				>
					<PlayerVideoPreview film={film} videoRef={videoRef} />
				</div>
			</Link>

			<h3 className='small-film-card__title'>
				<Link to={`/films/${film.id}`} className='small-film-card__link'>
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
