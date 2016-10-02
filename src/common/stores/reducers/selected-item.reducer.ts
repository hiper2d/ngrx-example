import {Action} from "./action.enum";

export const selectedItem = (state: any = null, {type, payload}) => {
	switch (type) {
		case Action[Action.SELECT_ITEM]:
				return payload;
		default:
			return state;
	}
}