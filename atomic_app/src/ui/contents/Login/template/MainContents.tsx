import React, { useCallback, useState } from 'react';
import { useNavigate } from 'react-router-dom';

import { MenuRoute } from '../../../../routes/MenuRoute';
import LoginButton from '../organism/LoginButton';
import PasswordTextField from '../organism/PasswordTextField';
import UserNameTextField from '../organism/UserNameTextField';

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

        navigation(
            MenuRoute.pathname,
            {
                state: MenuRoute.state(userName, password),
            }
        )
    // eslint-disable-next-line react-hooks/exhaustive-deps
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