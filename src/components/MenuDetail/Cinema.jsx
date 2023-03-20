import Tippy from '@tippyjs/react';
import React, { useState } from 'react';
import classNames from 'classnames/bind';
import styles from './MenuDetail.module.scss';

import Box from '@mui/material/Box';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Divider from '@mui/material/Divider';
import InboxIcon from '@mui/icons-material/Inbox';
import DraftsIcon from '@mui/icons-material/Drafts';

import images from '~/layouts/components/Images';
import Item from './Item';

const cx = classNames.bind(styles);

function Cinema({ children }) {
  const renderTippy = () => (
    <div className={cx('wrapper')} tabIndex='-1'>
      <Box
        className={cx('Menu')}
        sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}
      >
        <nav aria-label='main mailbox folders'>
          <List>
            <Item name='Tất cả các rạp' to='cinema/site' />
            <Item name='Rạp đặc biệt' to='cinema/special' />
            <Item name='Rạp 3D' to='cinema/3d' />

            {/* <ListItem disablePadding>
                            <ListItemButton>
                                <ListItemText primary="Inbox" />
                                <ListItemIcon>
                                    <img src={images.iconMenuDetail} alt="" />
                                </ListItemIcon>
                            </ListItemButton>
                        </ListItem>
                        <ListItem disablePadding>
                            <ListItemButton>
                                <ListItemIcon>
                                    <DraftsIcon />
                                </ListItemIcon>
                                <ListItemText primary="Drafts" />
                            </ListItemButton>
                        </ListItem> */}
          </List>
        </nav>
      </Box>
    </div>
  );

  return (
    <div>
      <Tippy
        interactive={true}
        render={renderTippy}
        delay={[0, 10]}
        hideOnClick={false}
        animation={false}
        placement='bottom-start'
      >
        {children}
      </Tippy>
    </div>
  );
}

export default Cinema;
