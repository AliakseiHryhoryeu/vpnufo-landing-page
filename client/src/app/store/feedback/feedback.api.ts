import { useMemo } from 'react'
import { Dispatch, bindActionCreators } from 'redux'
import axios from 'axios'

import { IFeedback } from './feedback.types'
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

const serverIp = process.env.SERVER_IP
const baseUrl = serverIp + 'api/lists/'

export const feedbackApi = createApi({
	reducerPath: 'FeedbackApi',
	baseQuery: fetchBaseQuery({ baseUrl: baseUrl }),
	endpoints: build => ({
		getFeedbacks: build.query<IFeedback[], string>({
			query: () => `getFeedbacks`,
		}),
		addFeedback: build.query<IFeedback[], string>({
			query: (
				title: string = '',
				text: string = '',
				username: string = '',
				date: string = '',
				userId = ''
			) =>
				`getFeedback?title=${title}&text=${text}&username=${username}&date=${date}&userId=${userId}`,
		}),
		editFeedback: build.query<IFeedback[], string>({
			query: (FeedbackId: string = '', title: string = '', text: string = '') =>
				`getFeedback?FeedbackId=${FeedbackId}&title=${title}&text=${text}`,
		}),
		deleteFeedback: build.query<IFeedback[], string>({
			query: (FeedbackId: string = '') =>
				`getFeedback?FeedbackId=${FeedbackId}`,
		}),
	}),
})

export const {
	useGetFeedbacksQuery,
	useAddFeedbackQuery,
	useEditFeedbackQuery,
	useDeleteFeedbackQuery,
} = feedbackApi

// export namespace FeedbackActions {
// 	export const getFeedback = userId => {
// 		return async dispatch => {
// 			try {
// 				const response = await axios.get(serverIp + `api/lists/getLists`, {
// 					params: {
// 						userId: userId,
// 					},
// 				})
// 				dispatch({
// 					type: FeedbackActionsTypes.GET_FEEDBACK,
// 					payload: response.data.lists,
// 				})
// 			} catch (e) {
// 				console.log(e)
// 			}
// 		}
// 	}

// 	export const addFeedback = (userId, title, color) => {
// 		return async dispatch => {
// 			try {
// 				const response = await axios.post(serverIp + `api/lists/addList`, {
// 					userId: userId,
// 					color: color,
// 					title: title,
// 				})
// 				dispatch({
// 					type: FeedbackActionsTypes.ADD_FEEDBACK,
// 					payload: response.data,
// 				})
// 			} catch (e) {
// 				console.log(e)
// 			}
// 		}
// 	}

// 	export const editFeedback = (listId, title) => {
// 		return async dispatch => {
// 			try {
// 				const response = await axios.put(serverIp + `api/lists/editList`, {
// 					listId: listId,
// 					title: title,
// 				})
// 				dispatch({
// 					type: FeedbackActionsTypes.EDIT_FEEDBACK,
// 					payload: response.data.list,
// 				})
// 			} catch (e) {
// 				console.log(e)
// 			}
// 		}
// 	}

// 	export const deleteFeedback = listId => {
// 		return async dispatch => {
// 			try {
// 				const response = await axios.put(serverIp + `api/lists/deleteList`, {
// 					listId: listId,
// 				})
// 				dispatch({
// 					type: FeedbackActionsTypes.DELETE_FEEDBACK,
// 					payload: response.data.lists,
// 				})
// 			} catch (e) {
// 				console.log(e)
// 			}
// 		}
// 	}
// }
