import type { LightsOutState } from "../reducers/lights-out/lights-out-reducer";
import { CHANCE_LIGHT_STARTS_ON, N_COLS, N_ROWS } from "./constant";

export const flipCellsAround = (
	coord: `${number}-${number}`,
	board: boolean[][]
): LightsOutState => {
	const [y, x] = coord.split("-").map(Number);
	function flipCell(y: number, x: number) {
		// if this coord is actually on board, flip it
		if (x >= 0 && x < N_COLS && y >= 0 && y < N_ROWS) {
			board[y][x] = !board[y][x];
		}
	}
	flipCell(y, x); //Flip initial cell
	flipCell(y, x - 1); //flip left
	flipCell(y, x + 1); //flip right
	flipCell(y - 1, x); //flip below
	flipCell(y + 1, x); //flip above

	// win when every cell is turned off
	const hasWon = board.every((row) => row.every((cell) => !cell));
	return { board, hasWon };
};

export const createBoard = () => {
	const board: boolean[][] = [];
	for (let y = 0; y < N_ROWS; y++) {
		const row: boolean[] = [];
		for (let x = 0; x < N_COLS; x++) {
			row.push(Math.random() < CHANCE_LIGHT_STARTS_ON);
		}
		board.push(row);
	}
	return board;
};
