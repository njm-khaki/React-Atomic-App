import React from 'react';
import { useLocation } from 'react-router-dom';
import { MenuState } from '../../../routes/MenuRoute';
import NavigationBar from '../../components/NavigationBar/NavigationBar';
import Grid from '../../layouts/Grid/Grid';
import { contents } from './molecule/contents';

/**
 * ログイン画面本体
 * @returns 
 */
const Menu: React.FC = () => {
    // 遷移元からstateを受け取る
    const state = useLocation().state as MenuState
    return (
        <React.Fragment>
            {/* ナビゲーションバー */}
            <NavigationBar username={state.username} />
            <Grid cells={contents} />
        </React.Fragment>
    );
}

export default Menu;
