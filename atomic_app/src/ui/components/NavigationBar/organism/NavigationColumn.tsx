import React from 'react';
import { Navbar } from 'react-bootstrap';

interface Props {
    align?: `start` | `center` | `end`;
}

/**
 * ナビゲーションバーに表示する要素
 * @param props 
 * @returns 
 */
const NavigationColumn: React.FC<React.PropsWithChildren<Props>> = (props) => {
    return (
        <Navbar.Collapse className={`justify-content-${props.align ?? `end`}`}>
            { props.children }
        </Navbar.Collapse>
    )
}
export default NavigationColumn;