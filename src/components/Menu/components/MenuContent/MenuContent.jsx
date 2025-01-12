import React from 'react';
import { Stack } from '@mui/material';
import { navItems } from '../../../../util/data';
import MenuItem from '../MenuItem';
import './menuContent.scss';

const MenuContent = () => {
	return (
		<div id='menu-content'>
			<Stack component='nav' spacing={0.5} sx={{ px: 2 }}>
				{navItems.map((item) => (
					<MenuItem data={item} />
				))}
			</Stack>
		</div>
	);
};

export default MenuContent;
