import React from 'react';
import NavigationBar from '../../common/organisms/NavigationBar/NavigationBar';
import MainContents from './../templates/MainContents';

const Login: React.FC = () => {
    return (
        <React.Fragment>
            <NavigationBar />
            <MainContents />
        </React.Fragment>
    );
}

export default Login;
