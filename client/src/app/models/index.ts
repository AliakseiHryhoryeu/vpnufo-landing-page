export interface UserModel {
	userId: string
	username: string
	feedbacksId: string[]
	faqId: string[]
}
export interface FaqModel {
	_id: string
	title: string
	text: string
	userId: string
}
export interface FeedbackModel {
	_id: string
	title: string
	text: string
	username: string
	date: string
	userId: string
}

export enum UserActionsTypes {
	SET_USER = 'USER/SET_USER',
	LOGOUT = 'USER/LOGOUT',
}

export enum FaqActionsTypes {
	GET_FAQ = 'FAQ/GET_FAQ',
	ADD_FAQ = 'FAQ/ADD_FAQ',
	EDIT_FAQ = 'FAQ/EDIT_FAQ',
	DELETE_FAQ = 'FAQ/DELETE_FAQ',
}

export enum FeedbackActionsTypes {
	GET_FEEDBACK = 'FEEDBACK/GET_FEEDBACK',
	ADD_FEEDBACK = 'FEEDBACK/ADD_FEEDBACK',
	EDIT_FEEDBACK = 'FEEDBACK/EDIT_FEEDBACK',
	DELETE_FEEDBACK = 'FEEDBACK/DELETE_FEEDBACK',
}
