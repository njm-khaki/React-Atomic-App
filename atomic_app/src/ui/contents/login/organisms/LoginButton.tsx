import React from 'react';
import ElevatedButton from '../../../components/ElevatedButton/ElevatedButton';
import ExpandedRow from '../../../layouts/ExpandedRow/ExpandedRow';
import ResponsiveColum from '../../../layouts/ResponsiveColum/ResponsiveColum';

interface Props {
    // クリックしたときの処理
    onClick: () => Promise<void>
}

/**
 * ログインボタン
 * @param props 
 * @returns 
 */
const LoginButton: React.FC<Props> = (props) => {
    return (
        <ExpandedRow>
            <ResponsiveColum>
                <ElevatedButton
                    onClick={props.onClick}
                >
                    Login
                </ElevatedButton>
            </ResponsiveColum>
        </ExpandedRow>
    );
}

export default LoginButton;