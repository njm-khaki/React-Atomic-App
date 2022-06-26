import Login from '../ui/contents/Login/Login';
import { Route } from './Route';

export const LoginRoute: Route<undefined> = {
    pathname: `/`,
    element: <Login />,
    state: () => {
        return undefined
    }
}