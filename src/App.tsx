import React from 'react';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import Header from './components/Header';
import Main from './components/Main';

const useStyles = makeStyles((theme: Theme) =>
	createStyles({
		container: {
			display: 'flex',
			flexDirection: 'column',
			height: '100vh'
		}
	}),
);

function App() {
	const classes = useStyles();

	return (
		<div className={classes.container}>
			<Header />
			<Main />
		</div>
	);
}

export default App;
