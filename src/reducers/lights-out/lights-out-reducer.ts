import { createBoard, flipCellsAround } from "../../lib/utils";

export type LightsOutState = {
	hasWon: boolean;
	board: boolean[][];
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
