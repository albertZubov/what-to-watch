import React, { useEffect, useRef, useState } from 'react'
import { getFilm } from '../../store/selectors'
import { propFilm } from '../../props/props'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { videoAdapter } from '../../utils/utils'

const Player = (props) => {
	const { film } = props
	const { videoLink } = film
	const videoRef = useRef()
	const [isPlaying, setIsPlaying] = useState(false)
	const [videoDuration, setVideoDuration] = useState(1)
	const [currentTime, setCurrentTime] = useState('0')
	const [isFlag, setIsFlag] = useState(null)
	const initialX = 24

	// console.log(film)

	useEffect(() => {
		console.dir(videoRef)
		if (videoRef.current) {
			isPlaying ? videoRef.current.play() : videoRef.current.pause()
		}
	}, [isPlaying])

	return (
		<div className='player'>
			<video
				src={videoLink}
				className='player__video'
				poster='img/player-poster.jpg'
				ref={videoRef}
				onTimeUpdate={() =>
					setCurrentTime(Math.floor(videoRef.current.currentTime))
				}
				onDurationChange={() => {
					setVideoDuration(Math.floor(videoRef.current.duration))
				}}
				preload='metadata'
			></video>

			<button type='button' className='player__exit'>
				Exit
			</button>

			<div className='player__controls'>
				<div className='player__controls-row'>
					<div className='player__time'>
						<progress
							className='player__progress'
							value={videoAdapter.progress(currentTime, videoDuration)}
							max='100'
						></progress>
						<div
							className='player__toggler'
							style={{
								left: `${videoAdapter.progress(currentTime, videoDuration)}%`,
							}}
							// Остановился тут
							onMouseDown={() => {
								setIsFlag(true)
							}}
							onMouseMove={(e) => {
								if (isFlag) {
									e.target.style.left = `${e.clientX - initialX}px`
								}
							}}
							onMouseUp={(evt) => {
								setIsFlag(false)
								setCurrentTime(
									Math.floor((evt.clientX / 19) * (videoDuration / 100))
								)
								console.log(currentTime)
							}}
						>
							Toggler
						</div>
					</div>
					<div className='player__time-value'>
						{videoAdapter.time(currentTime)}
					</div>
				</div>

				<div className='player__controls-row'>
					<button
						type='button'
						className='player__play'
						onClick={() => setIsPlaying(!isPlaying)}
					>
						<svg viewBox='0 0 19 19' width='19' height='19'>
							<use xlinkHref='#play-s'></use>
						</svg>
						<span>Play</span>
					</button>
					<div className='player__name'>Transpotting</div>

					<button
						type='button'
						className='player__full-screen'
						onClick={() => videoRef.current.requestFullscreen()}
					>
						<svg viewBox='0 0 27 27' width='27' height='27'>
							<use xlinkHref='#full-screen'></use>
						</svg>
						<span>Full screen</span>
					</button>
				</div>
			</div>
		</div>
	)
}

Player.propTypes = {
	film: PropTypes.shape(propFilm),
}

const mapStateToProps = (state, { activeId }) => ({
	film: getFilm(state, activeId),
})

export default connect(mapStateToProps)(Player)
