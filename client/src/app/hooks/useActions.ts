import { bindActionCreators } from '@reduxjs/toolkit'
import { useDispatch } from 'react-redux'

import { skillActions } from '../store/skill/skill.slice'
import { projectActions } from '../store/project/project.slice'

const allActions = {
	...skillActions,
	...projectActions,
}

export const useActions = () => {
	const dispach = useDispatch()

	return bindActionCreators(allActions, dispach)
}
