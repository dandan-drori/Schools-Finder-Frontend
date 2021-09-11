export function setUserMsg(userMsg) {
	return async dispatch => {
		dispatch({ type: 'SET_USER_MSG', userMsg })
	}
}

export function setFetchUserMsg() {
	return async dispatch => {
		dispatch({
			type: 'SET_USER_MSG',
			userMsg: { msg: 'Fetching data', highlight: '...', type: 'fetching' },
		})
	}
}

export function setSuccessUserMsg() {
	return async dispatch => {
		dispatch({
			type: 'SET_USER_MSG',
			userMsg: { msg: 'Data loaded successfully', highlight: ':)', type: 'success' },
		})
		dispatch(setDoneUserMsg())
	}
}

export function setFailUserMsg() {
	return async dispatch => {
		dispatch({
			type: 'SET_USER_MSG',
			userMsg: { msg: 'Data loading failed', highlight: ':(', type: 'fail' },
		})
		dispatch(setDoneUserMsg())
	}
}

export function setDoneUserMsg(wait = 2000) {
	return async dispatch => {
		setTimeout(() => {
			dispatch({
				type: 'SET_USER_MSG',
				userMsg: { msg: '', highlight: '', type: 'done' },
			})
		}, wait)
	}
}

export function setErrorUserMsg() {
	return async dispatch => {
		dispatch({
			type: 'SET_USER_MSG',
			userMsg: { msg: 'Invalid file type', highlight: '!', type: 'error' },
		})
		dispatch(setDoneUserMsg())
	}
}
