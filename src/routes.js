import Home from './components/home/Home';
import Notfound from './components/Notfound';
import Details from './components/detail/Details';

const routes = [
    {
        id: 1,
        path: '/',
        exact: true,
        main: () => <Home />
    },
    {
        id: 2,
        path: '/detail/:dataid',
        exact: false,
        main: (match) => <Details match = {match}/>
    },
    {
        id: 3,
        path: '',
        exact: false,
        main: () => <Notfound />
    }
];

export default routes;