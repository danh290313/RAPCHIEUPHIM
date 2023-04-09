import styles from './MenuAccount.module.scss';
import classNames from 'classnames/bind';
import { NavLink, Routes, Route } from 'react-router-dom';

import { listMenu } from '~/constants/AccountMenu/AccountMenu';

const cx = classNames.bind(styles);

function MenuAccount() {
  return (
    <div className={cx('swapper')}>
      <div className={cx('sidebar')}>
        {listMenu.map((item, index) => {
          return (
            <NavLink key={index} to={item.link}>
              {({ isActive }) => (
                <div className={cx('menu-item')}>
                  <div className={cx('item-sidebar', { isActive })}></div>

                  <div className={cx('item_title')}>{item.title}</div>
                </div>
              )}
            </NavLink>
          );
        })}
      </div>
      <div className={cx('body')}>
        {
          <Routes>
            {listMenu.map((item, index) => (
              <Route
                key={item.link}
                path={item.link}
                element={item.element}
              ></Route>
            ))}
          </Routes>
        }
      </div>
    </div>
  );
}

export default MenuAccount;
