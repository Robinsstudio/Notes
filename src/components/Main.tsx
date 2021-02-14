import React from 'react';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import Note from './Note';

const useStyles = makeStyles((theme: Theme) =>
	createStyles({
		container: {
			flex: 1
		}
	}),
);

function Main() {
	const classes = useStyles();

	return (
		<div className={classes.container}>
			<Note />
		</div>
	);
}

export default Main;
