import React from 'react'
import { propFilm } from '../../props/props'
import PropTypes from 'prop-types'

const PlayerVideo = ({ film, refLink, onTimeUpdate, onDurationChange }) => {
	return (
		<video
			src={film.videoLink}
			className='player__video'
			poster='img/player-poster.jpg'
			ref={refLink}
			onTimeUpdate={onTimeUpdate}
			onDurationChange={onDurationChange}
			autoPlay
			muted
		></video>
	)
}

PlayerVideo.propTypes = {
	film: PropTypes.shape(propFilm),
	onTimeUpdate: PropTypes.func,
	onDurationChange: PropTypes.func,
	refLink: PropTypes.object,
}

export default PlayerVideo
