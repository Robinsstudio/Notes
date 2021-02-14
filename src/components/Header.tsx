import React, { Fragment, useState } from 'react';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import EventIcon from '@material-ui/icons/Event';
import DatePickerDialog from './DatePickerDialog';

const useStyles = makeStyles((theme: Theme) =>
	createStyles({
		menuButton: {
			marginRight: theme.spacing(2),
		},
		title: {
			flex: 1
		},
	}),
);

function Header() {
	const [dialogOpen, setDialogOpen] = useState(false);

	const classes = useStyles();

	return (
		<Fragment>
			<AppBar position="static">
				<Toolbar>
					<IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
						<MenuIcon />
					</IconButton>
					<Typography variant="h6" className={classes.title}>
						Notes
					</Typography>
					<IconButton onClick={() => setDialogOpen(true)} edge="end" color="inherit" aria-label="date">
						<EventIcon />
					</IconButton>
				</Toolbar>
			</AppBar>
			<DatePickerDialog open={dialogOpen} onClose={() => setDialogOpen(false)}></DatePickerDialog>
		</Fragment>
	);
}

export default Header;
