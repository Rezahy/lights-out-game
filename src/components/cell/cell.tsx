import "./cell.css";
/** A single cell on the board.
 *
 * This has no state --- just two props:
 *
 * - flipCellsAroundMe: a function rec'd from the board which flips this
 *      cell and the cells around of it
 *
 * - isLit: boolean, is this cell lit?
 *
 * This handles clicks --- by calling flipCellsAroundMe
 *
 **/
type CellProps = {
	isLit: boolean;
	onClick: () => void;
};
const Cell = ({ isLit, onClick }: CellProps) => {
	return <td className={`Cell ${isLit ? "Cell-lit" : ""}`} onClick={onClick} />;
};
export default Cell;
