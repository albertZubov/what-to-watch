import React, { useEffect, useRef, useState } from 'react'
import PropTypes from 'prop-types'
import { videoAdapter } from '../../utils/utils'
import PlayerVideo from './player-video'

const Player = ({ activeId }) => {
	const videoRef = useRef()
	const [isPlaying, setIsPlaying] = useState(false)
	const [videoDuration, setVideoDuration] = useState(1)
	const [currentTime, setCurrentTime] = useState('0')
	const [isFlag, setIsFlag] = useState(null)
	const initialX = 24

	useEffect(() => {
		if (videoRef.current) {
			isPlaying ? videoRef.current.play() : videoRef.current.pause()
		}
	}, [isPlaying])

	return (
		<div className='player'>
			<PlayerVideo
				activeId={activeId}
				refLink={videoRef}
				onTimeUpdate={() =>
					setCurrentTime(Math.floor(videoRef.current.currentTime))
				}
				onDurationChange={() => {
					setVideoDuration(Math.floor(videoRef.current.duration))
				}}
			/>

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
	activeId: PropTypes.number.isRequired,
}

export default Player
