import css from './Header.module.css';

import {NavLink} from 'react-router-dom';

const Header = () => {
    return (
        <div className={`${css.header}`}>
            <NavLink to={'/'}>
                <div className={`${css.f60}`}>Nature</div>
            </NavLink>
            <NavLink to={'admin'}>
                <div className={`${css.f40}`}>Admin</div>
            </NavLink>
        </div>
    );
};

export {Header};
