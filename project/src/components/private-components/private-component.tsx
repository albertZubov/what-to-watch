import { AuthorizationStatus } from '../../const/const'
import { connect } from 'react-redux'
import { getAuthorizationStatus } from '../../store/selectors'
import { stateType } from '../../types/types'

type propsType = {
	children: JSX.Element
	authorizationStatus: string
}

const PrivateComponent = ({ children, authorizationStatus }: propsType) => {
	return authorizationStatus === AuthorizationStatus.AUTH ? children : null
}

const mapStateToProps = (state: stateType) => ({
	authorizationStatus: getAuthorizationStatus(state),
})

export default connect(mapStateToProps)(PrivateComponent)
