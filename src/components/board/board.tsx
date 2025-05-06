import { useReducer } from "react";
import Cell from "../cell/cell";
import "./board.css";
import {
	lightsOutInitialState,
	lightsOutReducer,
} from "../../reducers/lights-out/lights-out-reducer";
import { chooseCell } from "../../reducers/lights-out/lights-out-action";
/** Game board of Lights out.
 * State:
 *
 * - hasWon: boolean, true when board is all off
 * - board: array-of-arrays of true/false
 *
 *    For this board:
 *       .  .  .
 *       O  O  .     (where . is off, and O is on)
 *       .  .  .
 *
 *    This would be: [[f, f, f], [t, t, f], [f, f, f]]
 *
 *  This should render an HTML table of individual <Cell /> components.
 *
 *  This doesn't handle any clicks --- clicks are on individual cells
 *
 **/
const Board = () => {
	const [lightsOutState, dispatch] = useReducer(
		lightsOutReducer,
		lightsOutInitialState
	);
	// const makeTable = () => {
	// 	const tblBoard: JSX.Element[] = [];
	// 	for (let y = 0; y < N_ROWS; y++) {
	// 		const row: JSX.Element[] = [];
	// 		for (let x = 0; x < N_COLS; x++) {
	// 			const coord = `${y}-${x}` as const;
	// 			row.push(
	// 				<Cell
	// 					key={coord}
	// 					isLit={lightsOutState.board[y][x]}
	// 					onClick={dispatch.bind(null, chooseCell(coord))}
	// 				/>
	// 			);
	// 		}
	// 		tblBoard.push(<tr key={y}>{row}</tr>);
	// 	}
	// 	return (
	// 		<table className="Board">
	// 			<tbody>{tblBoard}</tbody>
	// 		</table>
	// 	);
	// };
	return (
		<div>
			{lightsOutState.hasWon ? (
				<div className="winner">
					<span className="neon-orange">YOU</span>
					<span className="neon-blue">WIN!</span>
				</div>
			) : (
				<div>
					<div className="Board-title">
						<div className="neon-orange">Lights</div>
						<div className="neon-blue">Out</div>
					</div>
					{/* {makeTable()} */}
					<table className="Board">
						<tbody>
							{lightsOutState.board.map((rows, rowIndex) => (
								<tr>
									{rows.map((_cols, colIndex) => {
										const coord = `${rowIndex}-${colIndex}` as const;
										return (
											<Cell
												key={coord}
												isLit={lightsOutState.board[rowIndex][colIndex]}
												onClick={dispatch.bind(null, chooseCell(coord))}
											/>
										);
									})}
								</tr>
							))}
						</tbody>
					</table>
				</div>
			)}
		</div>
	);
};
export default Board;
