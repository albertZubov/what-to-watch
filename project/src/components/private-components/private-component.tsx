import { AuthorizationStatus } from '../../const/const'
import { getAuthorizationStatus } from '../../store/selectors'
import { useAppSelector } from '../../hooks/hooks'

type propsType = {
	children: JSX.Element
}

const PrivateComponent = ({ children }: propsType) => {
	const authorizationStatus = useAppSelector((state) =>
		getAuthorizationStatus(state)
	)
	return authorizationStatus === AuthorizationStatus.AUTH ? children : null
}

export default PrivateComponent
