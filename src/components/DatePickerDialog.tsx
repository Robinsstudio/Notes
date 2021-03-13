import React, { useState } from 'react';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import Dialog from '@material-ui/core/Dialog';
import { Button } from '@material-ui/core';
import { DatePicker } from '@material-ui/pickers';
import { MuiPickersUtilsProvider } from '@material-ui/pickers';
import DateFnsUtils from '@date-io/date-fns';
import { useDispatch, useSelector } from 'react-redux';
import { ActionType } from '../store/actions';
import { selectDate } from '../store/selectors';

const useStyles = makeStyles((theme: Theme) =>
	createStyles({
		dialog: {
			display: 'block',
			textAlign: 'center'
		},
		button: {
			margin: theme.spacing(2)
		}
	}),
);

interface DatePickerDialogProps {
	open: boolean;
	onClose: () => void;
}

function DatePickerDialog(props: DatePickerDialogProps) {
	const initialDate = useSelector(selectDate);
	const [date, setDate] = useState(initialDate);
	const dispatch = useDispatch();

	function updateDate(date: Date | null) {
		if (date !== null) {
			setDate(date);
		}
	}

	function dispatchDate() {
		dispatch({
			type: ActionType.UPDATE_DATE,
			date
		});

		props.onClose();
	}

	const classes = useStyles();

	return (
		<Dialog className={classes.dialog} open={props.open} onClose={props.onClose}>
			<MuiPickersUtilsProvider utils={DateFnsUtils}>
				<DatePicker open={false} value={date} onChange={date => updateDate(date)} variant="static"/>
			</MuiPickersUtilsProvider>
			<div>
				<Button className={classes.button} onClick={dispatchDate} variant="contained" color="primary">Valider</Button>
				<Button className={classes.button} onClick={props.onClose} variant="contained" color="secondary">Annuler</Button>
			</div>
		</Dialog>
	);
}

export default DatePickerDialog;
