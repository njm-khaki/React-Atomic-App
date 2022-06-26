import React from 'react';
import { Col } from 'react-bootstrap';
import { LayoutColumns } from '../../../interface/layout/LayoutColums'

interface Props {
    middle?: LayoutColumns;
    large?: LayoutColumns;
}

const ResponsiveColumn: React.FC<React.PropsWithChildren<Props>> = (props) => {
    return (
        <Col
            sm="12"
            md={`${props.middle ?? 6}`}
            lg={`${props.large ?? 4}`}
        >
            {props.children}
        </Col>
    )
}
export default ResponsiveColumn;