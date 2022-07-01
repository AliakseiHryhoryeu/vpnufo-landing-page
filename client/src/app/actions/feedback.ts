import { useMemo } from 'react'
import { Dispatch, bindActionCreators } from 'redux'
import axios from 'axios'

import { FeedbackActionsTypes } from 'app/models'

const serverIp = process.env.SERVER_IP

export namespace FeedbackActions {
	export enum Type {
		GET_FEEDBACK = 'FEEDBACK/GET_FEEDBACK',
		ADD_FEEDBACK = 'FEEDBACK/ADD_FEEDBACK',
		EDIT_FEEDBACK = 'FEEDBACK/EDIT_FEEDBACK',
		DELETE_FEEDBACK = 'FEEDBACK/DELETE_FEEDBACK',
	}

	export const getFeedback = userId => {
		return async dispatch => {
			try {
				const response = await axios.get(serverIp + `api/lists/getLists`, {
					params: {
						userId: userId,
					},
				})
				dispatch({
					type: FeedbackActionsTypes.GET_FEEDBACK,
					payload: response.data.lists,
				})
			} catch (e) {
				console.log(e)
			}
		}
	}

	export const addFeedback = (userId, title, color) => {
		return async dispatch => {
			try {
				const response = await axios.post(serverIp + `api/lists/addList`, {
					userId: userId,
					color: color,
					title: title,
				})
				dispatch({
					type: FeedbackActionsTypes.ADD_FEEDBACK,
					payload: response.data,
				})
			} catch (e) {
				console.log(e)
			}
		}
	}

	export const editFeedback = (listId, title) => {
		return async dispatch => {
			try {
				const response = await axios.put(serverIp + `api/lists/editList`, {
					listId: listId,
					title: title,
				})
				dispatch({
					type: FeedbackActionsTypes.EDIT_FEEDBACK,
					payload: response.data.list,
				})
			} catch (e) {
				console.log(e)
			}
		}
	}

	export const deleteFeedback = listId => {
		return async dispatch => {
			try {
				const response = await axios.put(serverIp + `api/lists/deleteList`, {
					listId: listId,
				})
				dispatch({
					type: FeedbackActionsTypes.DELETE_FEEDBACK,
					payload: response.data.lists,
				})
			} catch (e) {
				console.log(e)
			}
		}
	}
}

export type FeedbackActions = Omit<typeof FeedbackActions, 'Type'>
export const useFeedbackActions = (dispatch: Dispatch) => {
	const { Type, ...actions } = FeedbackActions
	return useMemo(
		() => bindActionCreators(actions as any, dispatch),
		[dispatch]
	) as FeedbackActions
}
