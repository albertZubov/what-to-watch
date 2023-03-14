import React, { useEffect, useRef, useState } from 'react'
import { videoAdapter } from '../../utils/utils'
import PlayerVideo from './player-video'
import { connect } from 'react-redux'
import { getFilm } from '../../store/selectors'
import '../../style-css/style.css'
import cl from 'classnames'
import browserHistory from '../../browser-history'
import { StateType } from '../../types/types'
import { useParams } from 'react-router-dom'

// TODO попробовать изменить browserHistory на хук useHistory

const Player = ({ state }: { state: StateType }) => {
	const videoRef = useRef<HTMLVideoElement>(null)
	const [isPlaying, setIsPlaying] = useState(false)
	const [currentTime, setCurrentTime] = useState(0)
	const [played, setPlayed] = useState(0)
	const [isLoading, setIsLoading] = useState(false)

	const params = useParams()
	const film = params.id ? getFilm(state, +params.id) : undefined

	useEffect(() => {
		if (videoRef.current) {
			isPlaying ? videoRef.current.play() : videoRef.current.pause()
		}
	}, [isPlaying])

	useEffect(() => {
		if (played && videoRef.current !== null) {
			setCurrentTime(videoAdapter.changeTime(played, videoRef.current.duration))
		}
	}, [played])

	const handleSeekChange = ({ target }: any) => {
		setPlayed(target.value)
	}

	const handleMouseDown = () => setIsPlaying(false)

	const handleMouseUp = () => {
		if (currentTime && videoRef.current !== null) {
			videoRef.current.currentTime = currentTime
			setIsPlaying(true)
		}
	}

	const handleTimeUpdate = () => {
		if (videoRef.current !== null) {
			setPlayed(videoAdapter.progress(currentTime, videoRef.current.duration))
			setCurrentTime(videoRef.current.currentTime)
		}
	}

	return (
		<div className='player'>
			{film ? (
				<PlayerVideo
					film={film}
					refLink={videoRef}
					onTimeUpdate={handleTimeUpdate}
					onDurationChange={() => {
						if (videoRef.current !== null) {
							Math.round(videoRef.current.duration)
						}
					}}
					onLoadedData={() => setIsLoading(true)}
					onSeeking={() => setIsLoading(false)}
					onSeeked={() => setIsLoading(true)}
					onClick={() => setIsPlaying(!isPlaying)}
				/>
			) : (
				''
			)}
			<div
				className={cl('player__loading', {
					'player__loading--active': !isLoading,
				})}
			>
				<div className='player__ball--big'></div>
				<div className='player__ball--small'></div>
			</div>
			<button
				onClick={() => browserHistory.back()}
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
						onClick={() => {
							if (videoRef.current !== null) {
								videoRef.current.requestFullscreen()
							}
						}}
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

const mapStateToProps = (state: StateType) => ({
	state: state,
})

export default connect(mapStateToProps)(Player)
