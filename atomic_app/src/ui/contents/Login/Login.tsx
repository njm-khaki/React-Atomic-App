import React from 'react';
import NavigationBar from '../../components/NavigationBar/NavigationBar';
import MainContents from './template/MainContents';

/**
 * ログイン画面本体
 * @returns 
 */
const Login: React.FC = () => {
    return (
        <React.Fragment>
            {/* ナビゲーションバー */}
            <NavigationBar />
            {/* ログイン画面本体のレイアウト */}
            <MainContents />
        </React.Fragment>
    );
}

export default Login;
