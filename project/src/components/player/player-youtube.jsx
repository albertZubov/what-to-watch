import React, { useRef, useState } from 'react'
import YouTube from 'react-youtube'
import PropTypes from 'prop-types'

const PlayerYoutube = ({ videoId, closeVideo }) => {
	const [player, setPlayer] = useState(null)

	if (player) {
		closeVideo && player.pauseVideo()
	}

	const opts = {
		height: '700',
		width: '1000',
		playerVars: {
			autoplay: 1,
			modestbranding: 1,
			rel: 0,
			showinfo: 0,
		},
	}

	const onReady = ({ target }) => {
		setPlayer(target)
	}

	return <YouTube videoId={videoId} onReady={onReady} opts={opts} />
}

PlayerYoutube.propTypes = {
	videoId: PropTypes.string.isRequired,
	closeVideo: PropTypes.bool.isRequired,
}

export default PlayerYoutube
