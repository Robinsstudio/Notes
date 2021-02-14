import React from 'react';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import Homepage from './Homepage';

const useStyles = makeStyles((theme: Theme) =>
	createStyles({
		container: {
			flex: 1,
			margin: theme.spacing(0, 2)
		}
	}),
);

function Main() {
	const classes = useStyles();

	return (
		<div className={classes.container}>
			<Homepage />
		</div>
	);
}

export default Main;
