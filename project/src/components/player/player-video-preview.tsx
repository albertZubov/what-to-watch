import React from 'react'
import { filmType } from '../../types/types'

type propsType = {
	film: filmType
	videoRef: React.LegacyRef<HTMLVideoElement>
}

const PlayerVideoPreview = ({ film, videoRef }: propsType) => {
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

export default PlayerVideoPreview
