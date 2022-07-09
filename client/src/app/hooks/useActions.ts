import { bindActionCreators } from '@reduxjs/toolkit'
import { useDispatch } from 'react-redux'

import { cartActions } from '../store/cart/cart.slice'

const allActions = {
	...cartActions,
}

export const useActions = () => {
	const dispach = useDispatch()

	return bindActionCreators(allActions, dispach)
}
