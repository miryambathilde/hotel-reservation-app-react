import { create } from "zustand";

const useStore = create((set) => ({
	/**
 * Adds a new reservation to the state.
 * @param {string} hotel - The name of the hotel for the reservation.
 * @param {string[]} dates - An array of dates for the reservation.
 */
	reservations: [],
	addReservation: (hotel, dates) =>
		set(state => ({
			reservations: [ ...state.reservations, { hotel, dates } ]
		}))

}));

export default useStore;