import "../styles/globals.css";
import type { AppProps } from "next/app";
import { PersistGate } from "redux-persist/integration/react";
import { Provider } from "react-redux";
import store, { persistor } from "../store";
import Menus from "../components/Menus";

function MyApp({ Component, pageProps }: AppProps) {
	return (
		<Provider store={store}>
			<PersistGate loading={null} persistor={persistor}>
				<Menus pages={<Component {...pageProps} />} />
			</PersistGate>
		</Provider>
	);
}

export default MyApp;
