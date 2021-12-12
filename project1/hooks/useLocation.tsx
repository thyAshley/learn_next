import React, { useContext, useState } from 'react';
import { ActionKind, storeContext } from '../pages/_app';

const useLocation = () => {
	const [error, setError] = useState<string>('');
	const [latLong, setLatLng] = useState<{
		latitude?: number;
		longitude?: number;
	}>({});

	const { dispatch } = useContext(storeContext);
	dispatch({ type: ActionKind.SET_LAT_LONG, payload: { latLong: '' } });

	const successHandler: PositionCallback = (position) => {
		const latitude = position.coords.latitude;
		const longitude = position.coords.longitude;

		setLatLng({ latitude, longitude });
		setError('');
	};

	const errorHandler: PositionErrorCallback = () => {
		setError('Unable to fetch location...');
	};

	const trackLocation = () => {
		if (!navigator.geolocation) {
			setError('Geolocation is not supported by your browser');
		} else {
			navigator.geolocation.getCurrentPosition(successHandler, errorHandler);
		}
	};

	return {
		trackLocation,
		error,
		latLong,
	};
};

export default useLocation;
