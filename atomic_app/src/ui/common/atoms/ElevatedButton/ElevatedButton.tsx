import React from 'react'
import { Button } from 'react-bootstrap'

interface Props {
    onClick?: () => Promise<void>;
}

const ElevatedButton: React.FC<React.PropsWithChildren<Props>> = (props) => {
    return (
        <div className="shadow-lg rounded">
            <Button 
                className="my-2 col-12"
                onClick={() => props.onClick !== undefined
                    ? props.onClick()
                    : () => { }
                }
            >
                {props.children}
            </Button>
        </div>
    )
}
export default ElevatedButton;