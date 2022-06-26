import React from "react";
import ExpandedRow from "../ExpandedRow/ExpandedRow";
import ResponsiveColumn from "../ResponsiveColumn/ResponsiveColumn";
import { LayoutColumns } from '../../../interface/layout/LayoutColums'

/**
 * グリッド表示する1つずつの情報
 */
export interface CellElement {
    middle?: LayoutColumns;
    large?: LayoutColumns;
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
                                (col) => <ResponsiveColumn
                                    middle={col.middle}
                                    large={col.large}
                                >
                                    {col.cell}
                                </ResponsiveColumn>
                            )
                        }
                    </ExpandedRow>
                )
            }
        </React.Fragment>
    )
}
export default Grid;