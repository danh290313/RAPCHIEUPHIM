import styles from './FeatureFilm.module.scss';
import classNames from 'classnames/bind';    
import { Link } from 'react-router-dom';
const cx = classNames.bind(styles);


function FeatureFilm({name, to}) {

    return ( 
        <div className={cx('wrapper')}>
            <h3 className={cx('name')}> {name} </h3>
            <div className={cx('feature')}>
                <div className={cx('detail-sticker')}>
                    <Link to={`detailsticker/${to}`}>    
                        xem chi tiết
                    </Link>
                </div>
                <div className={cx('buy-sticker')}>
                    Mua vé
                </div>
            </div>

        </div>
     );
}

export default FeatureFilm;