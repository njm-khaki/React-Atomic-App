import React from 'react';
import { Row } from 'react-bootstrap';

interface Props {
    // 列び寄せる揃える位置
    // start: 左揃え
    // center: 中央揃え
    // end: 右揃え
    align?: `start` | `center` | `end`
}

const ExpandedRow: React.FC<React.PropsWithChildren<Props>> = (props) => {
    return (
        <Row 
            className={`mx-0 justify-content-${props.align ?? `center`}`}
        >
            { props.children }
        </Row>
    )
}
export default ExpandedRow;