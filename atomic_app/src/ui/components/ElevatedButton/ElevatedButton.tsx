import React from 'react'
import { Button } from 'react-bootstrap'

interface Props {
    // 押下時の処理
    onClick?: () => Promise<void>;
    disabled?: boolean;
    style?: React.CSSProperties;
}

/**
 * 共通ボタン
 * @param props 
 * @returns 
 */
const ElevatedButton: React.FC<React.PropsWithChildren<Props>> = (props) => {
    return (
        <div className="shadow-lg rounded">
            <Button 
                className="my-2 col-12"
                disabled={props.disabled}
                onClick={() => props.onClick !== undefined
                    ? props.onClick()
                    : () => { }
                }
                style={props.style}
            >
                {props.children}
            </Button>
        </div>
    )
}
export default ElevatedButton;