import React from 'react';
import { createStyles, makeStyles } from '@material-ui/core/styles';
import Header from './components/Header';
import Main from './components/Main';

const useStyles = makeStyles(() =>
	createStyles({
		container: {
			display: 'flex',
			flexDirection: 'column',
			height: '100vh'
		}
	}),
);

function App(): JSX.Element {
	const classes = useStyles();

	return (
		<div className={classes.container}>
			<Header />
			<Main />
		</div>
	);
}

export default App;
