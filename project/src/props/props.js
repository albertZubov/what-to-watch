import PropTypes from 'prop-types'

export const propFilm = {
	backgroundColor: PropTypes.string.isRequired,
	backgroundImage: PropTypes.string.isRequired,
	description: PropTypes.string.isRequired,
	director: PropTypes.string.isRequired,
	genre: PropTypes.string.isRequired,
	id: PropTypes.number.isRequired,
	isFavorite: PropTypes.bool.isRequired,
	name: PropTypes.string.isRequired,
	posterImage: PropTypes.string.isRequired,
	previewImage: PropTypes.string.isRequired,
	previewVideoLink: PropTypes.string.isRequired,
	rating: PropTypes.number.isRequired,
	released: PropTypes.number.isRequired,
	runTime: PropTypes.number.isRequired,
	scoresCount: PropTypes.number.isRequired,
	videoLink: PropTypes.string.isRequired,
	starring: PropTypes.array.isRequired,
}
