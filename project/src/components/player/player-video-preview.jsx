import React from 'react'
import { propFilm } from '../../props/props'
import PropTypes from 'prop-types'

const PlayerVideoPreview = ({ film }) => {
	const { previewVideoLink, posterImage } = film

	return (
		<video
			src={previewVideoLink}
			className='player__video'
			poster={posterImage}
			// autoPlay={isPlaying}
			muted
			preload={'none'}
		></video>
	)
}

PlayerVideoPreview.propTypes = {
	film: PropTypes.shape(propFilm),
}

export default PlayerVideoPreview
