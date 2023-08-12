import { useForm } from 'react-hook-form';
import toast from 'react-hot-toast';
import useStore from '../store';
import { Input, Typography, Button } from '@mui/material';

/* hotel props */
export default function BookingForm ({ hotel }) {

	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm();

	// addReservation function from useStore
	const addReservation = useStore((state) => state.addReservation);
	const onSubmit = (data) => {
		addReservation(hotel, data);
		toast.success("Your booking has been registered");
	};

	return (
		<form onSubmit={ handleSubmit(onSubmit) }>
			<Input type="date" { ...register("startDate", { required: true }) } />
			{ errors.startDate && (
				<Typography style={ { color: "red" } }>Start date is required</Typography>
			) }
			<br />
			<Input type="date" { ...register("endDate", { required: true }) } />
			{ errors.endDate && (
				<Typography style={ { color: "red" } }>End date is required</Typography>
			) }
			<br />
			<br />
			<Button variant='contained' type='submit'>Register your booking</Button>
		</form>
	);
}
