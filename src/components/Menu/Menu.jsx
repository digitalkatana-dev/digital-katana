import React from 'react';
import { Box, Drawer } from '@mui/material';
import MenuContent from './components/MenuContent';

const Menu = ({ open, setDrawerOpen }) => {
	const handleClose = () => {
		setDrawerOpen(false);
	};

	return (
		<Box sx={{ flexShrink: { lg: 0 }, width: { lg: 280 } }}>
			<Drawer
				open={open}
				onClose={handleClose}
				slotProps={{
					paper: { sx: { width: 280, bg: 'red' } },
				}}
			>
				<MenuContent />
			</Drawer>
		</Box>
	);
};

export default Menu;
