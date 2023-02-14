import styles from './MenuAccount.module.scss'
import classNames from 'classnames/bind'
import { NavLink, Routes, Route} from 'react-router-dom';

import { listMenu } from '~/constants/AccountMenu/AccountMenu';


const cx = classNames.bind(styles);

function MenuAccount() {
    return ( 
        <div className={cx('swapper')}>
            <div className={cx('sidebar')}>
                {
                    listMenu.map( (item, index) => {
                        return (
                            <div className={cx('item')}>
                                <NavLink key={index} to={`${item.link}`} >
                                 {item.title}
                                </NavLink>
                            </div>
                        )
                    })
                }
            </div>
            <div className={cx('body')}>
                {
                    <Routes>
                        {
                            listMenu.map(
                                (item, index) => (
                                    <Route 
                                    key={item.link}
                                    path={item.link}
                                    element={item.element}
                                    ></Route>
                                )
                            )
                        }
                    </Routes>
                }
            </div>

        </div>
     );
}

export default MenuAccount;