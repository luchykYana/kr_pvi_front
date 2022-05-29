import {Outlet} from 'react-router-dom';

import {Header} from '../Header/Header';

import css from './Layout.module.css';

const Layout = () => {
    return (
        <div>
            <Header/>
            <div className={`${css.mTop}`}></div>
            <Outlet className={`${css.outlet}`}/>
        </div>
    );
};

export {Layout};
