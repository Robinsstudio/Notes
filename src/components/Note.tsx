import React from 'react';
import { Button, Container, TextField, Typography } from '@material-ui/core';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';

const useStyles = makeStyles((theme: Theme) =>
	createStyles({
		container: {
			textAlign: 'center'
		},
		title: {
			margin: theme.spacing(8, 0)
		},
		button: {
			margin: theme.spacing(4, 2)
		}
	}),
);

function Note() {
	const classes = useStyles();

	return (
		<Container className={classes.container} maxWidth="sm">
			<Typography className={classes.title} variant="h4">
				{ new Date().toLocaleDateString('fr-FR') }
			</Typography>
			<TextField label="Note" variant="outlined" rows={4} multiline fullWidth/>
			<Button className={classes.button} variant="contained" color="primary">Enregistrer</Button>
			<Button className={classes.button} variant="contained" color="secondary">Annuler</Button>
		</Container>
	);
}

export default Note;
