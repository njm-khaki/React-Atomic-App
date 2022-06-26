import React, { useCallback, useState } from 'react';
import { useNavigate } from 'react-router-dom';

import TextField from '../../../components/TextField/TextField';
import ElevatedButton from '../../../components/ElevatedButton/ElevatedButton';
import ExpandedRow from '../../../layouts/ExpandedRow/ExpandedRow';
import ResponsiveColum from '../../../layouts/ResponsiveColum/ResponsiveColum';
import UserNameTextField from './../organisms/UserNameTextField';
import PasswordTextField from './../organisms/PasswordTextField';
import LoginButton from './../organisms/LoginButton';

/**
 * ログイン画面の基本レイアウト
 * @returns 
 */
const MainContents: React.FC = () => {
    const navigation = useNavigate()

    // ユーザー名とパスワードの入力状態を管理する
    const [userName, setUserName] = useState(``)
    const [password, setPassword] = useState(``)

    // ログインボタン押下時の処理を実装する
    const onClickLoginButton = useCallback(async () => {
        console.log(`user name: ${userName}, password: ${password}`)

        if (userName === `` || password === ``) {
            return
        }

        navigation(`/menu`)
    }, [userName, password])

    return (
        <React.Fragment>
            {/* ユーザー名入力欄 */}
            <UserNameTextField 
                onInputUserName={
                    async (username) => setUserName(username)
                }
            />
            {/* パスワード入力欄 */}
            <PasswordTextField 
                onInputPassword={
                    async (password) => setPassword(password)
                }
            />
            {/* ログインボタン */}
            <LoginButton onClick={onClickLoginButton} />
        </React.Fragment>
    );
}

export default MainContents;