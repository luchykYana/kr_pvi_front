import css from './Header.module.css';

import {NavLink} from 'react-router-dom';

const Header = () => {
    return (
        <div className={`${css.header}`}>
            <NavLink to={'/'}>
                <div className={`${css.f60}`}>Images</div>
            </NavLink>
            <NavLink to={'admin'}>
                <div className={`${css.f40}`}>Are you admin?</div>
            </NavLink>
        </div>
    );
};

export {Header};
