import { UserModel } from 'app/models'

export namespace RootState {
	export type UserState = {
		activeUser: UserModel
		isAuth: boolean
	}
}

export interface RootState {
	user: RootState.UserState
	router?: any
}
