import React from 'react';
import { Form } from 'react-bootstrap';

interface Props {
    // 入力する文字列の種類
    // text: 普通のテキスト入力
    type: `text` | `password` | `textarea`;
    // 初期値
    default?: string;
    placeholder?: string;
    readonly?: boolean;
    rows?: number;
    onChange?: (value: string) => Promise<void>;
    style?: React.CSSProperties;
}

/**
 * テキスト入力用
 * @param props 
 * @returns 
 */
const TextField: React.FC<Props> = (props) => {
    return (
        <Form.Control
            className="my-2 col-12"
            defaultValue={props.default}
            type={
                props.type !== `textarea`
                    ? props.type
                    : undefined
            }
            as={
                props.type === `textarea`
                    ? props.type
                    : undefined
            }
            rows={
                props.type === `textarea`
                    ? props.rows
                    : undefined
            }
            placeholder={props.placeholder}
            readOnly={props.readonly}
            onChange={(event) => props.onChange !== undefined
                ? props.onChange(event.target.value)
                : () => { }
            }
            style={props.style}
        />
    )
}
export default TextField;