import createHistory from 'history/createBrowserHistory';

const history = createHistory();

export const goTo = (path: string) => history.push(path);

export default history;
