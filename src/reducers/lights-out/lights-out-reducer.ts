import { createBoard, flipCellsAround } from "../../lib/utils";
type BoardRow = [boolean, boolean, boolean, boolean, boolean];
export type Board = [
	[...BoardRow],
	[...BoardRow],
	[...BoardRow],
	[...BoardRow],
	[...BoardRow]
];
export type LightsOutState = {
	hasWon: boolean;
	board: Board;
};

export type LightsOutAction = {
	type: "lights-out/chooseCell";
	payload: `${number}-${number}`;
};

export const lightsOutInitialState: LightsOutState = {
	hasWon: false,
	board: createBoard(),
};

export const lightsOutReducer = (
	state: LightsOutState,
	action: LightsOutAction
): LightsOutState => {
	switch (action.type) {
		case "lights-out/chooseCell": {
			const newState = flipCellsAround(action.payload, [...state.board]);
			return { ...state, ...newState };
		}
		default: {
			return state;
		}
	}
};
