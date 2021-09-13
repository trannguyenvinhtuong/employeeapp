import Home from './components/home/Home';
import Notfound from './components/Notfound';
import Details from './components/detail/Details';

const routes = [
    {
        path: '/',
        exact: true,
        main: () => <Home />
    },
    {
        path: '/detail/:dataid',
        exact: false,
        main: (match) => <Details match = {match}/>
    },
    {
        path: '',
        exact: false,
        main: () => <Notfound />
    }
];

export default routes;