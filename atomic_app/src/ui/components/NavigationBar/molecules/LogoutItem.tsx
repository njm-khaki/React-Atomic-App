import React, { useCallback } from 'react';
import { NavDropdown } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import { LoginRoute } from './../../../../routes/LoginRoute'

interface Props {
    username?: string;
}

/**
 * ナビゲーションバーに表示する要素
 * @param props 
 * @returns 
 */
const LogoutItem: React.FC<Props> = (props) => {
    const navigaton = useNavigate()

    // ログアウト押下時
    const onClickLogout = useCallback(() => {
        navigaton(LoginRoute.pathname)
    }, [navigaton])

    if (props.username === undefined) {
        return <React.Fragment />
    }    

    return (
        <React.Fragment>
            <NavDropdown.Divider />
            <NavDropdown.Item
                onClick={onClickLogout}
            >
                Logout
            </NavDropdown.Item>
        </React.Fragment>
    )
}
export default LogoutItem;