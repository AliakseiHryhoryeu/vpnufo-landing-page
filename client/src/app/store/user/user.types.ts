export interface IUser {
	userId: string
	username: string
	feedbacksId: string[]
	faqId: string[]
}
export interface IUserState {
	activeUser: IUser
	isAuth: boolean
}
