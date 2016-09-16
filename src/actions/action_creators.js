import { ACTION } from './actionTypes'

export function action(param) {
	return {
		type: ACTION,
		payload: { param }
	}
};
