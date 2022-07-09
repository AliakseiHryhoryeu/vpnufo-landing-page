export interface UserModel {
	userId: string
	username: string
	feedbacksId: string[]
	faqId: string[]
}
export enum UserActionsTypes {
	SET_USER = 'USER/SET_USER',
	LOGOUT = 'USER/LOGOUT',
}
