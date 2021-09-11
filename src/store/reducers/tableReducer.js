const INITIAL_STATE = {
	data: [],
	header: '',
}

export const tableReducer = (state = INITIAL_STATE, action) => {
	switch (action.type) {
		case 'SET_DATA':
			return { ...state, data: action.data }
		case 'SET_HEADER':
			return { ...state, header: action.header }
		default:
			return state
	}
}
