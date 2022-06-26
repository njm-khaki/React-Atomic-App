export interface Route<T> {
    pathname: string,
    element: JSX.Element,
    state: (...params: any[]) => T
}