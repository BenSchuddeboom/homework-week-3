export const ADD_MODEL = 'ADD_MODEL'

export const addModel = (model) => {
	return {
		type: ADD_MODEL,
		payload: model,
	}
}