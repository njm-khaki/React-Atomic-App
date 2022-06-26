import React from 'react';
import TextField from '../../../components/TextField/TextField';
import ExpandedRow from '../../../layouts/ExpandedRow/ExpandedRow';
import ResponsiveColumn from '../../../layouts/ResponsiveColumn/ResponsiveColumn';

interface Props {
    // ユーザー名を入力されたときの動作を受け取る
    onInputUserName: (username: string) => Promise<void>
}

/**
 * ユーザー名の入力欄
 * @param props 
 * @returns 
 */
const UserNameTextField: React.FC<Props> = (props) => {
    return (
        <ExpandedRow>
            <ResponsiveColumn>
                <TextField
                    type="text"
                    placeholder="user name"
                    onChange={props.onInputUserName}
                />
            </ResponsiveColumn>
        </ExpandedRow>
    );
}

export default UserNameTextField;