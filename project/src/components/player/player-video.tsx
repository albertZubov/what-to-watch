import React from 'react'
import { filmType } from '../../types/types'

type propsType = {
	film: filmType
	refLink: React.LegacyRef<HTMLVideoElement>
	onTimeUpdate: React.ReactEventHandler<HTMLVideoElement>
	onDurationChange: React.ReactEventHandler<HTMLVideoElement>
	onLoadedData: React.ReactEventHandler<HTMLVideoElement>
	onSeeked: React.ReactEventHandler<HTMLVideoElement>
	onSeeking: React.ReactEventHandler<HTMLVideoElement>
	onClick: React.ReactEventHandler<HTMLVideoElement>
}

const PlayerVideo = ({
	film,
	refLink,
	onTimeUpdate,
	onDurationChange,
	onLoadedData,
	onSeeked,
	onSeeking,
	onClick,
}: propsType) => {
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

export default PlayerVideo
