export interface IFAQ {
	_id: string
	title: string
	text: string
	userId: number
}

export interface FaqState {
	faqPosts: IFAQ[]
}

export enum FaqActionsTypes {
	GET_FAQ = 'FAQ/GET_FAQ',
	ADD_FAQ = 'FAQ/ADD_FAQ',
	EDIT_FAQ = 'FAQ/EDIT_FAQ',
	DELETE_FAQ = 'FAQ/DELETE_FAQ',
}

export interface AddFaqModel {
	title: string
	text: string
	userId: number
}
