export interface IFeedback {
	_id: string
	title: string
	text: string
	username: string
	date: string
	userId: string
}
export interface IFeedbackState {
	feedbackPosts: IFeedback[]
}
