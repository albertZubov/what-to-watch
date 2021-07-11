import React from 'react'
import { propFilm } from '../../props/props'
import PropTypes from 'prop-types'

const PlayerVideo = (props) => {
	const { film, isPlaying } = props
	const { previewVideoLink, posterImage } = film
	const { refLink, onTimeUpdate, onDurationChange } = props

	return (
		<video
			src={previewVideoLink}
			className='player__video'
			poster={posterImage}
			ref={refLink}
			onTimeUpdate={onTimeUpdate}
			onDurationChange={onDurationChange}
			autoPlay={isPlaying}
			muted
		></video>
	)
}

PlayerVideo.propTypes = {
	film: PropTypes.shape(propFilm),
	onTimeUpdate: PropTypes.func,
	onDurationChange: PropTypes.func,
	refLink: PropTypes.object,
	isPlaying: PropTypes.bool,
}

export default PlayerVideo
