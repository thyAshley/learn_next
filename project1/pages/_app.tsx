import '../styles/globals.css';
import type { AppProps } from 'next/app';
import React, { createContext, ReducerAction, useReducer } from 'react';

export const storeContext = createContext(
	{} as { state: State; dispatch: React.Dispatch<Action> }
);

interface StoreProviderProps {
	children: React.ReactNode;
}

export enum ActionKind {
	SET_LAT_LONG = 'SET_LAT_LONG',
	SET_STORES = 'SET_STORES',
}

type Action =
	| {
			type: ActionKind.SET_STORES;
	  }
	| {
			type: ActionKind.SET_LAT_LONG;
			payload: {
				latLong: string;
			};
	  };

interface State {
	latLong: string;
	stores: any[];
}

const storeReducer = (state: State, action: Action) => {
	switch (action.type) {
		case ActionKind.SET_LAT_LONG: {
			return {
				...state,
				latLong: action.payload.latLong,
			};
		}
		case ActionKind.SET_STORES: {
			return state;
		}
		default:
			throw new Error('Unhandled action type');
	}
};

const initialValues = {
	latLong: '',
	stores: [],
};

const StoreProvider = ({ children }: StoreProviderProps) => {
	const [state, dispatch] = useReducer(storeReducer, initialValues);
	return (
		<storeContext.Provider value={{ state, dispatch }}>
			{children}
		</storeContext.Provider>
	);
};

function MyApp({ Component, pageProps }: AppProps) {
	return (
		<>
			<StoreProvider>
				<Component {...pageProps} />
			</StoreProvider>
		</>
	);
}

export default MyApp;
