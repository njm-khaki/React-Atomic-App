import React from 'react';
import TextField from '../../../components/TextField/TextField';
import ExpandedRow from '../../../layouts/ExpandedRow/ExpandedRow';
import ResponsiveColumn from '../../../layouts/ResponsiveColumn/ResponsiveColumn';

interface Props {
    // ユーザー名を入力されたときの動作を受け取る
    onInputPassword: (password: string) => Promise<void>
}

/**
 * パスワードの入力欄
 * @param props 
 * @returns 
 */
const PasswordTextField: React.FC<Props> = (props) => {
    return (
        <ExpandedRow>
            <ResponsiveColumn>
                <TextField
                    type="password"
                    placeholder="password"
                    onChange={props.onInputPassword}
                />
            </ResponsiveColumn>
        </ExpandedRow>
    );
}

export default PasswordTextField;