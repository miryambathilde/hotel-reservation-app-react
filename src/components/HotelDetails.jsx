import { useQuery } from "@tanstack/react-query";
import { useRoute } from "wouter";
import { Card, CardActions, CardContent, CardMedia, Typography } from "@mui/material";


const fecthHotel = async (id) => {
	const response = await fetch(`http://localhost:3001/hotels/${ id }`);
	if (!response.ok) {
		throw new Error("Netowrk error. Response Failed");
	}
	return response.json();
};

export default function HotelDetails () {
	const [ match, params ] = useRoute("/hotel/:id");
	const {
		data: hotel,
		isLoading,
		error
	} = useQuery({
		queryKey: [ "hotel", params.id ],
		queryFn: () => fecthHotel(params.id),
	});

	// Return loading message while data is loading
	if (isLoading) {
		return <div>Loading...</div>;
	}
	// Return error message if there was an error fetching hotel
	if (error) {
		return <div>Error fetching hotels: { error.message }</div>;
	}

	return (
		<Card sx={ { maxWidth: 345, backgroundColor: "e8e8e8" } }>
			<CardMedia
				sx={ { height: 140 } }
				image={ hotel.image }
				title={ hotel.name }
			/>
			<CardContent>
				<Typography gutterBottom variant="h5" component="div">
					{ hotel.name }
				</Typography >
				<Typography variant="body2" color="text.secondary">
					{ hotel.description }
				</Typography >
			</CardContent>
			<CardActions>
				{/* formulario */ }
			</CardActions>
		</Card>
	);
}