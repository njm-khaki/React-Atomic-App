import React from 'react';
import { Col } from 'react-bootstrap';

interface Props {
    middle?: 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12;
    large?: 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12;
}

const ResponsiveColum: React.FC<React.PropsWithChildren<Props>> = (props) => {
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
export default ResponsiveColum;