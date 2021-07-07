import React from 'react'
import cl from 'classnames'
import { connect } from 'react-redux'
import { ActionCreator } from '../../store/action'
import { getActiveTab } from '../../store/selectors'
import PropTypes from 'prop-types'

const tabsNames = ['Overview', `Details`, 'Reviews']

const CardTabsList = (props) => {
	const { activeTab, changeTab } = props

	return (
		<nav className='film-nav film-card__nav'>
			<ul
				className='film-nav__list'
				onClick={({ target }) => {
					if (target.tagName !== 'SPAN' && target.tagName !== 'A') {
						return ''
					} else {
						changeTab(target.textContent)
					}
				}}
			>
				{tabsNames.map((el) => (
					<li
						className={cl('film-nav__item', {
							'film-nav__item--active': el === activeTab,
						})}
						key={el.length + el}
					>
						<a className='film-nav__link'>{el}</a>
					</li>
				))}
			</ul>
		</nav>
	)
}

CardTabsList.propTypes = {
	activeTab: PropTypes.string.isRequired,
	changeTab: PropTypes.func.isRequired,
}

const mapStateToProps = (state) => ({
	activeTab: getActiveTab(state),
})

const mapDispatchToProps = (dispatch) => ({
	changeTab: (payload) => dispatch(ActionCreator.changeTab(payload)),
})

export default connect(mapStateToProps, mapDispatchToProps)(CardTabsList)
