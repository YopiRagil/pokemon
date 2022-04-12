import axios from "axios";
import { bodyJson, uri } from "./setting";

export const getDataPokemon = async () => {
	return axios.get(uri + "pokemon", {
		headers: {
			...bodyJson(),
		},
	});
};

export const getDetail = async (api: string) => {
	return axios.get(api, {
		headers: {
			...bodyJson(),
		},
	});
};
