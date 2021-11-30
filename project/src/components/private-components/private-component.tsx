import { AuthorizationStatus } from '../../const/const'
import { connect } from 'react-redux'
import { getAuthorizationStatus } from '../../store/selectors'
import { StateType } from '../../types/types'

type propsType = {
	children: JSX.Element
	authorizationStatus: string
}

const PrivateComponent = ({ children, authorizationStatus }: propsType) => {
	return authorizationStatus === AuthorizationStatus.AUTH ? children : null
}

const mapStateToProps = (state: StateType) => ({
	authorizationStatus: getAuthorizationStatus(state),
})

export default connect(mapStateToProps)(PrivateComponent)
