import { getDataPokemon, getDetail } from "../network";

export const getPokemonData = () => {
	return async (dispatch: DispatcType) => {
		dispatch({ type: "LOADING_POKEMONS" });
		getDataPokemon()
			.then(({ data }) => {
				dispatch({ type: "POKEMON_LIST", payload: data });
			})
			.catch((err: any) => {});
	};
};

export const detailPokemonURI = (uri: string) => {
	return async (dispatch: DispatcType) => {
		dispatch({ type: "LOADING_DETAIL" });
		getDetail(uri)
			.then(({ data }) => {
				dispatch({ type: "DETAILS", payload: data });
			})
			.catch((err: any) => {});
	};
};

export const setPokemonDetail = (data: any) => {
	return async (dispatch: DispatcType) => {
		dispatch({ type: "DETAILS", payload: data });
	};
};

export const addToDeck = (data: any) => {
	return async (dispatch: DispatcType) => {
		dispatch({ type: "ADD_TO_DECK", payload: data });
	};
};

export const removeFromDeck = (id: number) => {
	return async (dispatch: DispatcType) => {
		dispatch({ type: "REMOVE_FROM_DECK", payload: id });
	};
};
