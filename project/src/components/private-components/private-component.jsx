import { AuthorizationStatus } from '../../const/const'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { getAuthorizationStatus } from '../../store/selectors'

const PrivateComponent = ({ children, authorizationStatus }) => {
	return authorizationStatus === AuthorizationStatus.AUTH ? children : ''
}

PrivateComponent.propTypes = {
	authorizationStatus: PropTypes.string.isRequired,
	children: PropTypes.oneOfType([
		PropTypes.array.isRequired,
		PropTypes.object.isRequired,
	]),
}

const mapStateToProps = (state) => ({
	authorizationStatus: getAuthorizationStatus(state),
})

export default connect(mapStateToProps)(PrivateComponent)
