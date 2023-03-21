import React from 'react'
import { FilmType } from '../../types/types'

type propsType = {
	film: FilmType
	videoRef: React.LegacyRef<HTMLVideoElement>
}

const PlayerVideoPreview = ({ film, videoRef }: propsType): JSX.Element => {
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
