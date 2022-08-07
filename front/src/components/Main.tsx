import React from 'react';
import { createStyles, makeStyles } from '@material-ui/core/styles';
import Note from './Note';

const useStyles = makeStyles(() =>
	createStyles({
		container: {
			flex: 1
		}
	}),
);

function Main(): JSX.Element {
	const classes = useStyles();

	return (
		<div className={classes.container}>
			<Note />
		</div>
	);
}

export default Main;
