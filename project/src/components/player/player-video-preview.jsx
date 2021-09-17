import React from 'react'
import { propFilm } from '../../props/props'
import PropTypes from 'prop-types'

const PlayerVideoPreview = ({ film, videoRef }) => {
	const { previewVideoLink, posterImage } = film

	return (
		<video
			ref={videoRef}
			src={previewVideoLink}
			className='player__video'
			poster={posterImage}
			muted
			preload={'none'}
		></video>
	)
}

PlayerVideoPreview.propTypes = {
	film: PropTypes.shape(propFilm),
	videoRef: PropTypes.object,
}

export default PlayerVideoPreview
