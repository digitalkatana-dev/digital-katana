import React from 'react';
import { AppBar, Box, IconButton, Stack, Toolbar } from '@mui/material';
import { MenuUnfoldOutlined } from '@ant-design/icons';
import './topbar.scss';

const Topbar = ({ open, setDrawerOpen }) => {
	const handleClick = () => {
		setDrawerOpen(true);
	};

	const appBarSettings = {
		boxShadow: 'none',
		height: 64,
		zIndex: 1101,
		bgcolor: 'black',
	};

	const toolBarSettings = {
		height: 1,
		px: { lg: 5 },
	};

	return (
		<AppBar sx={appBarSettings}>
			<Toolbar sx={toolBarSettings}>
				<IconButton sx={{ mr: 1 }} onClick={handleClick}>
					<MenuUnfoldOutlined id='menu-btn' />
				</IconButton>
				<Box sx={{ flexGrow: 1 }} />
			</Toolbar>
		</AppBar>
	);
};

export default Topbar;
