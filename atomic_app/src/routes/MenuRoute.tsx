import { Route } from './Route';
import Menu from '../ui/contents/Menu/Menu';

export interface MenuState {
    username: string,
    password: string,
}

export const MenuRoute: Route<MenuState> = {
    pathname: `/menu`,
    element: <Menu />,
    state: (username: string, password: string) => {
        return {
            username: username,
            password: password,
        }
    }
}