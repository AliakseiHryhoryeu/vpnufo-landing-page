export interface FeedbackModel {
	_id: string
	title: string
	text: string
	username: string
	date: string
	userId: string
}

export enum FeedbackActionsTypes {
	GET_FEEDBACK = 'FEEDBACK/GET_FEEDBACK',
	ADD_FEEDBACK = 'FEEDBACK/ADD_FEEDBACK',
	EDIT_FEEDBACK = 'FEEDBACK/EDIT_FEEDBACK',
	DELETE_FEEDBACK = 'FEEDBACK/DELETE_FEEDBACK',
}
