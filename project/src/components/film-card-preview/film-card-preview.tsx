import React, { useRef, useState } from 'react'
import { Link } from 'react-router-dom'
import PlayerVideoPreview from '../player/player-video-preview'
import { FilmType } from '../../types/types'

const FilmCardPreview = ({ film }: { film: FilmType }) => {
	const videoRef = useRef<HTMLVideoElement>(null)
	const [isPending, setIsPending] = useState(false)

	const onPlayVideo = () => {
		if (isPending || videoRef.current === null) return
		videoRef.current
			.play()
			.then(() => setIsPending)
			.catch(setIsPending)
	}

	const onPauseVideo = () => {
		if (isPending || videoRef.current === null) return
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

export default FilmCardPreview
