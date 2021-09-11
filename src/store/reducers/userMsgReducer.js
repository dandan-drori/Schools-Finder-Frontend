const INITIAL_STATE = {
	msg: '',
	highlight: '',
	type: 'done',
}

export const userMsgReducer = (state = INITIAL_STATE, action) => {
	switch (action.type) {
		case 'SET_USER_MSG':
			return { ...state, ...action.userMsg }
		default:
			return state
	}
}
