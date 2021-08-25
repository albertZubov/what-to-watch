import React, { useEffect, useRef, useState } from 'react'
import PropTypes from 'prop-types'
import { videoAdapter } from '../../utils/utils'
import PlayerVideo from './player-video'
import { connect } from 'react-redux'
import { getFilm } from '../../store/selectors'
import { propFilm } from '../../props/props'
import '../../style-css/player-loading.css'
import cl from 'classnames'
import browserHistory from '../../browser-history'

const Player = ({ film, history }) => {
	const videoRef = useRef()
	const [isPlaying, setIsPlaying] = useState(false)
	const [currentTime, setCurrentTime] = useState(0)
	const [played, setPlayed] = useState(0)
	const [isLoading, setIsLoading] = useState(false)

	console.log(history)

	useEffect(() => {
		if (videoRef.current) {
			isPlaying ? videoRef.current.play() : videoRef.current.pause()
		}
	}, [isPlaying])

	useEffect(() => {
		if (played) {
			setCurrentTime(videoAdapter.changeTime(played, videoRef.current.duration))
		}
	}, [played])

	const handleSeekChange = ({ target }) => {
		setPlayed(target.value)
	}

	const handleMouseDown = () => {
		setIsPlaying(false)
	}

	const handleMouseUp = () => {
		if (currentTime) {
			videoRef.current.currentTime = currentTime
			setIsPlaying(true)
		}
	}

	const handleTimeUpdate = () => {
		setPlayed(videoAdapter.progress(currentTime, videoRef.current.duration))
		setCurrentTime(videoRef.current.currentTime)
	}

	return (
		<div className='player'>
			<PlayerVideo
				film={film}
				refLink={videoRef}
				onTimeUpdate={handleTimeUpdate}
				onDurationChange={() => Math.round(videoRef.current.duration)}
				onLoadedData={() => setIsLoading(true)}
				onSeeking={() => setIsLoading(false)}
				onSeeked={() => setIsLoading(true)}
				onClick={() => setIsPlaying(!isPlaying)}
			/>
			<div
				className={cl('player__loading', {
					'player__loading--active': !isLoading,
				})}
			>
				<div className='player__ball--big'></div>
				<div className='player__ball--small'></div>
			</div>
			<button
				onClick={() => browserHistory.goBack()}
				type='button'
				className='player__exit'
			>
				Exit
			</button>

			<div className='player__controls'>
				<div className='player__controls-row'>
					<div className='player__time'>
						<input
							className='player__progress'
							type='range'
							min={0}
							max={100}
							step='any'
							value={played}
							onMouseDown={handleMouseDown}
							onChange={handleSeekChange}
							onMouseUp={handleMouseUp}
						/>
						<span
							className='player__progress-line'
							style={{
								width: `${played}%`,
							}}
						></span>
						<progress value={played} max='100'></progress>
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
						{!isPlaying ? (
							<svg viewBox='0 0 19 19' width='19' height='19'>
								<use xlinkHref='#play-s'></use>
							</svg>
						) : (
							<svg viewBox='0 0 14 21' width='14' height='21'>
								<use xlinkHref='#pause'></use>
							</svg>
						)}
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

const mapStateToProps = (state, { activeId }) => ({
	film: getFilm(state, activeId),
})

Player.propTypes = {
	film: PropTypes.shape(propFilm),
	history: PropTypes.object,
}

export default connect(mapStateToProps)(Player)
