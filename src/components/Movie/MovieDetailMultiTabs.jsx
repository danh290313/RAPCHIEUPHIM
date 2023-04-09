import * as React from 'react';
import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role='tabpanel'
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
}

export default function MovieDetailMultiTabs(props) {
  const { movieDescription, trailerSrc } = props;
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Box sx={{ width: '100%' }}>
      <Box
        sx={{
          borderBottom: 1,
          borderColor: 'divider',
          width: '12rem',
          marginX: 'auto',
        }}
      >
        <Tabs
          value={value}
          onChange={handleChange}
          aria-label='basic tabs example'
          centered
        >
          <Tab label='Chi tiết' {...a11yProps(0)} />
          <Tab label='Trailer' {...a11yProps(1)} />
        </Tabs>
      </Box>
      <TabPanel value={value} index={0}>
        {movieDescription}
      </TabPanel>
      <TabPanel value={value} index={1}>
        <iframe
          width='560'
          height='315'
          src={trailerSrc}
          title='PHIM ANH EM SUPER MARIO | Trailer D | Dự Kiến Khởi Chiếu: 07.04.2023'
          frameborder='0'
          allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share'
          allowfullscreen
        ></iframe>
      </TabPanel>
    </Box>
  );
}
