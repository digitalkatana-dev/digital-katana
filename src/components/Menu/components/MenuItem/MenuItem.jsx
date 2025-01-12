import React from 'react';
import { Box, ListItemButton } from '@mui/material';
import RouterLink from '../../../../components/RouterLink';

const MenuItem = ({ data }) => {
	const buttonStyles = {
		minHeight: 44,
		borderRadius: 0.75,
		typography: 'body2',
		color: '#6d41a1',
		textTransform: 'capitalize',
		fontWeight: 'fontWeightBold',
		// ...(active && {
		// 	color: 'primary.main',
		// 	fontWeight: 'fontWeightSemiBold',
		// 	bgcolor: 'rgba(23, 118, 242, .08)',
		// 	'&:hover': {
		// 		bgcolor: 'rgba(23, 118, 242, .16)',
		// 	},
		// }),
	};

	return (
		<ListItemButton
			component={RouterLink}
			href={data.path}
			// onClick={handleClick}
			sx={buttonStyles}
		>
			<Box component='span'>{data.title}</Box>
		</ListItemButton>
	);
};

export default MenuItem;
