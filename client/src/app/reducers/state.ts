import { UserModel } from 'app/models'
import { FaqModel } from 'app/models'
import { FeedbackModel } from 'app/models'

export namespace RootState {
	export type UserState = {
		activeUser: UserModel
		isAuth: boolean
	}
	export type FaqState = {
		faqPosts: FaqModel[]
	}

	export type FeedbackState = {
		feedbackPosts: FeedbackModel[]
	}
}

export interface RootState {
	user: RootState.UserState
	router?: any
}
