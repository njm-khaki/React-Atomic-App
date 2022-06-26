import React from 'react';
import ElevatedButton from '../../../components/ElevatedButton/ElevatedButton';
import ExpandedRow from '../../../layouts/ExpandedRow/ExpandedRow';
import ResponsiveColumn from '../../../layouts/ResponsiveColumn/ResponsiveColumn';

interface Props {
    // クリックしたときの処理
    onClick: () => Promise<void>
}

/**
 * ユーザー名の入力欄
 * @param props 
 * @returns 
 */
const LoginButton: React.FC<Props> = (props) => {
    return (
        <ExpandedRow>
            <ResponsiveColumn>
                <ElevatedButton
                    onClick={props.onClick}
                >
                    Login
                </ElevatedButton>
            </ResponsiveColumn>
        </ExpandedRow>
    );
}

export default LoginButton;