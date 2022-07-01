import { useMemo } from 'react'
import { Dispatch, bindActionCreators } from 'redux'
import { FaqActionsTypes } from 'app/models'

import axios from 'axios'

const serverIp = process.env.SERVER_IP

export namespace FaqActions {
	export enum Type {
		GET_FAQ = 'FAQ/GET_FAQ',
		ADD_FAQ = 'FAQ/ADD_FAQ',
		EDIT_FAQ = 'FAQ/EDIT_FAQ',
		DELETE_FAQ = 'FAQ/DELETE_FAQ',
	}

	export const getFaq = userId => {
		return async dispatch => {
			try {
				const response = await axios.get(serverIp + `api/lists/getLists`, {
					params: {
						userId: userId,
					},
				})
				dispatch({
					type: FaqActionsTypes.GET_FAQ,
					payload: response.data.lists,
				})
			} catch (e) {
				console.log(e)
			}
		}
	}

	export const addFaq = (userId, title, color) => {
		return async dispatch => {
			try {
				const response = await axios.post(serverIp + `api/lists/addList`, {
					userId: userId,
					color: color,
					title: title,
				})
				dispatch({ type: FaqActionsTypes.ADD_FAQ, payload: response.data })
			} catch (e) {
				console.log(e)
			}
		}
	}

	export const editFaq = (listId, title) => {
		return async dispatch => {
			try {
				const response = await axios.put(serverIp + `api/lists/editList`, {
					listId: listId,
					title: title,
				})
				dispatch({
					type: FaqActionsTypes.EDIT_FAQ,
					payload: response.data.list,
				})
			} catch (e) {
				console.log(e)
			}
		}
	}

	export const deleteFaq = listId => {
		return async dispatch => {
			try {
				const response = await axios.put(serverIp + `api/lists/deleteList`, {
					listId: listId,
				})
				dispatch({
					type: FaqActionsTypes.DELETE_FAQ,
					payload: response.data.lists,
				})
			} catch (e) {
				console.log(e)
			}
		}
	}
}

export type FaqActions = Omit<typeof FaqActions, 'Type'>
export const useFaqActions = (dispatch: Dispatch) => {
	const { Type, ...actions } = FaqActions
	return useMemo(
		() => bindActionCreators(actions as any, dispatch),
		[dispatch]
	) as FaqActions
}
