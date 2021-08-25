import React from 'react'
import { propFilm } from '../../props/props'
import PropTypes from 'prop-types'

const PlayerVideo = ({
	film,
	refLink,
	onTimeUpdate,
	onDurationChange,
	onLoadedData,
	onSeeked,
	onSeeking,
	onClick,
}) => {
	return (
		<video
			src={film.videoLink}
			className='player__video'
			poster='img/player-poster.jpg'
			ref={refLink}
			onTimeUpdate={onTimeUpdate}
			onDurationChange={onDurationChange}
			onLoadedData={onLoadedData}
			onSeeked={onSeeked}
			onSeeking={onSeeking}
			onClick={onClick}
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
	onLoadedData: PropTypes.func,
	onSeeked: PropTypes.func,
	onSeeking: PropTypes.func,
	onClick: PropTypes.func,
}

export default PlayerVideo
