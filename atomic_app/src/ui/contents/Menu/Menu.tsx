import React from 'react';
import NavigationBar from '../../components/NavigationBar/NavigationBar';
import Grid from '../../layouts/Grid/Grid';
import { contents } from './molecules/contents'

/**
 * ログイン画面本体
 * @returns 
 */
const Menu: React.FC = () => {
    return (
        <React.Fragment>
            {/* ナビゲーションバー */}
            <NavigationBar />
            <Grid cells={contents} />
        </React.Fragment>
    );
}

export default Menu;
