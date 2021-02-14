import React from 'react';
import { Typography } from '@material-ui/core';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';

const useStyles = makeStyles((theme: Theme) =>
	createStyles({
		container: {
			display: 'flex',
			flexDirection: 'column',
			alignItems: 'center',
		},
		title: {
			margin: theme.spacing(8, 0, 2, 0)
		}
	}),
);

function Homepage() {
	const classes = useStyles();

	return (
		<div className={classes.container}>
			<Typography className={classes.title} variant="h3">
				Notes
			</Typography>
			<Typography variant="h5">
				Une application pour prendre ses notes quotidiennes !
			</Typography>
		</div>
	);
}

export default Homepage;
