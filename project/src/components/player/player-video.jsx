import React from 'react'
import { getFilm } from '../../store/selectors'
import { propFilm } from '../../props/props'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'

const PlayerVideo = (props) => {
	const { film } = props
	const { videoLink } = film
	const { refLink, onTimeUpdate, onDurationChange } = props

	return (
		<video
			src={videoLink}
			className='player__video'
			poster='img/player-poster.jpg'
			ref={refLink}
			onTimeUpdate={onTimeUpdate}
			onDurationChange={onDurationChange}
			preload='auto'
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

const mapStateToProps = (state, { activeId }) => ({
	film: getFilm(state, activeId),
})

export default connect(mapStateToProps)(PlayerVideo)
