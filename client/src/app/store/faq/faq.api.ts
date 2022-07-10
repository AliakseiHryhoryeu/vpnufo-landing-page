import { IFAQ } from './faq.types'
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { useMemo } from 'react'
import { Dispatch, bindActionCreators } from 'redux'

import axios from 'axios'

const serverIp = process.env.SERVER_IP
const baseUrl = serverIp + 'api/faq/'

export const faqApi = createApi({
	reducerPath: 'faqApi',
	baseQuery: fetchBaseQuery({ baseUrl: baseUrl }),
	endpoints: build => ({
		getFaqs: build.query<IFAQ[], number>({
			query: () => `getFaq`,
		}),
		addFaq: build.query<IFAQ[], string>({
			query: (title: string = '', text: string = '', userId: string = '') => ({
				url: `/posts`,
				method: 'POST',
				body: { title, text, userId },
			}),
		}),
		editFaq: build.query<IFAQ[], string>({
			query: (faqId: string = '', title: string = '', text: string = '') =>
				`getFaq?faqId=${faqId}&title=${title}&text=${text}`,
		}),
		deleteFaq: build.query<IFAQ[], string>({
			query: (faqId: string = '') => `getFaq?faqId=${faqId}`,
		}),
	}),
})

export const {
	useGetFaqsQuery,
	useAddFaqQuery,
	useEditFaqQuery,
	useDeleteFaqQuery,
} = faqApi

// export const addFaq = (userId, title, color) => {
// 	return async dispatch => {
// 		try {
// 			const response = await axios.post(serverIp + `api/lists/addList`, {
// 				userId: userId,
// 				color: color,
// 				title: title,
// 			})
// 			dispatch({ type: FaqActionsTypes.ADD_FAQ, payload: response.data })
// 		} catch (e) {
// 			console.log(e)
// 		}
// 	}
// }

// export const editFaq = (listId, title) => {
// 	return async dispatch => {
// 		try {
// 			const response = await axios.put(serverIp + `api/lists/editList`, {
// 				listId: listId,
// 				title: title,
// 			})
// 			dispatch({
// 				type: FaqActionsTypes.EDIT_FAQ,
// 				payload: response.data.list,
// 			})
// 		} catch (e) {
// 			console.log(e)
// 		}
// 	}
// }

// export const deleteFaq = listId => {
// 	return async dispatch => {
// 		try {
// 			const response = await axios.put(serverIp + `api/lists/deleteList`, {
// 				listId: listId,
// 			})
// 			dispatch({
// 				type: FaqActionsTypes.DELETE_FAQ,
// 				payload: response.data.lists,
// 			})
// 		} catch (e) {
// 			console.log(e)
// 		}
// 	}
// }
