import {Action} from "./action.enum";

export const items = (state: any = [], {type, payload}) => {
	switch (type) {
		case Action[Action.ADD_ITEM]:
			return payload;
		case Action[Action.CREATE_ITEM]:
			return [...state, payload];
		case Action[Action.UPDATE_ITEM]:
			return state.map(item => {
				return item.id === payload.id ? Object.assign({}, item, payload) : item;
			});
		case Action[Action.DELETE_ITEM]:
			return state.filter(item => {
				return item.id !== payload.id;
			});
		default:
			return state;
	}
}