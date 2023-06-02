import images from '~/layouts/components/Images';
import Box from '@mui/material/Box';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Divider from '@mui/material/Divider';
import InboxIcon from '@mui/icons-material/Inbox';
import DraftsIcon from '@mui/icons-material/Drafts';
import classNames from 'classnames/bind';
import styles from './MenuDetail.module.scss';
import { Link } from 'react-router-dom';

const cx = classNames.bind(styles);

function Item({ name, to }) {
  return (
    <Link to={`/${to}`}>
      <ListItem disablePadding className={cx('item')}>
        <ListItemButton>
          <ListItemText primary={name} />
          <ListItemIcon>
            <img
              src={images.iconMenuDetail}
              alt=''
              className={cx('icon-item')}
            />
          </ListItemIcon>
        </ListItemButton>
      </ListItem>
    </Link>
  );
}

export default Item;
