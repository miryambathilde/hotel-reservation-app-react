import { Button, Card, CardActions, CardContent, CardMedia, Stack, Typography } from "@mui/material";
import { Link } from "wouter";
import { useQuery } from "@tanstack/react-query";
/**
 * Fetches hotels from the server.
 * @returns {Promise} A promise that resolves to the fetched hotels.
 * @throws {Error} If the request to fetch hotels fails.
 */
const fecthHotels = async () => {
	const response = await fetch("http://localhost:3001/hotels");
	if (!response.ok) {
		throw new Error("Failed to fetch hotels. Response Failed");
	}

	return response.json();
};

// Our component
/**
 * Function to render a list of hotels.
**/

function HotelList () {
	// Fetch hotels data using useQuery hook
	const {
		data: hotels,
		isLoading,
		error,
	} = useQuery({ queryKey: [ "hotels" ], queryFn: fecthHotels });

	// Return loading message while data is loading
	if (isLoading) {
		return <div>Loading...</div>;
	}
	// Return error message if there was an error fetching hotel
	if (error) {
		return <div>Error fetching hotels: { error.message }</div>;
	}

	// Return JSX element with hotels list
	return (
		<>
			<Typography variant="h4" component="h2">
				Booking App
			</Typography >
			<Stack spacing={ 2 }>
				{ hotels.map((hotel) => (
					<Link key={ hotel.id } href="`/hotel/${hotel.id}`">
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
								<Button size="small">See details</Button>
							</CardActions>
						</Card>
					</Link>
				)) }
			</Stack >
		</>
	);
}

export default HotelList;