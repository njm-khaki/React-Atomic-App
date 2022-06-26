import React from "react";
import ExpandedRow from "../ExpandedRow/ExpandedRow";
import ResponsiveColum from "../ResponsiveColum/ResponsiveColum";

/**
 * グリッド表示する1つずつの情報
 */
export interface CellElement {
    middle?: 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12;
    large?: 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12;
    cell: React.ReactNode;
}

/**
 * グリッド表示で要求する情報
 */
interface Props {
    cells: Array<Array<CellElement>>
}

/**
 * グリッド状にレイアウト組む
 * @param props 
 * @returns 
 */
const Grid: React.FC<Props> = (props) => {
    return (
        <React.Fragment>
            {
                props.cells.map(
                    (row) => <ExpandedRow>
                        {
                            row.map(
                                (col) => <ResponsiveColum
                                    middle={col.middle}
                                    large={col.large}
                                >
                                    {col.cell}
                                </ResponsiveColum>
                            )
                        }
                    </ExpandedRow>
                )
            }
        </React.Fragment>
    )
}
export default Grid;