import { uploadService } from '../../services/upload-service.js'
import { setSuccessUserMsg, setFailUserMsg, setFetchUserMsg } from './userMsgActions.js'

export function setTableData(data, shouldFormat) {
	return async dispatch => {
		if (shouldFormat) {
			const formattedData = uploadService.formatData(data)
			dispatch({ type: 'SET_DATA', data: formattedData })
		} else {
			try {
				dispatch(setFetchUserMsg())
				const { enrichedData } = await uploadService.enrichData(data)
				dispatch({ type: 'SET_DATA', data: enrichedData })
				dispatch(setSuccessUserMsg())
			} catch (err) {
				dispatch(setFailUserMsg())
			}
		}
	}
}

export function setTableHeader(header) {
	return async dispatch => {
		dispatch({ type: 'SET_HEADER', header })
	}
}
