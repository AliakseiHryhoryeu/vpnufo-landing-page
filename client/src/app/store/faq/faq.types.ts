export interface IFAQ {
	_id: string
	title: string
	text: string
	userId: string
}

export interface IFaqState {
	faqPosts: IFAQ[]
}
