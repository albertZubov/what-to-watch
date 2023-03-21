import React, { ChangeEvent, FormEvent, useState } from 'react'
import YouTube from 'react-youtube'

type optsType = {
	height: string
	width: string
	playerVars: {
		autoplay: 0 | 1
		modestbranding: 1
		rel: 0 | 1
		showinfo: 0 | 1
	}
}

type propsType = {
	videoId: string | undefined
	closeVideo: boolean
}

const PlayerYoutube = ({ videoId, closeVideo }: propsType) => {
	const [player, setPlayer] = useState<any>(null)

	if (player) {
		closeVideo && player.pauseVideo()
	}

	const opts: optsType = {
		height: '700',
		width: '1000',
		playerVars: {
			autoplay: 1,
			modestbranding: 1,
			rel: 0,
			showinfo: 0,
		},
	}

	const onReady = ({ target }: ChangeEvent<HTMLInputElement>) => {
		setPlayer(target)
	}

	return <YouTube videoId={videoId} onReady={onReady} opts={opts} />
}

export default PlayerYoutube
