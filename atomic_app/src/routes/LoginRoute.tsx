import { Route } from './Route';
import Login from '../ui/contents/Login/Login';

export const LoginRoute: Route<undefined> = {
    pathname: `/`,
    element: <Login />,
    state: () => {
        return undefined
    }
}