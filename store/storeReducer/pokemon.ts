const intialState: IPokemon = {
	pokemons: { data: null, loading: false, reload: false, list: [] },
	mydex: [],
	detail: { loading: false, data: null },
};

const PokemonReducer = (
	state: IPokemon = intialState,
	action: TAction,
): IPokemon => {
	switch (action.type) {
		case "LOADING_POKEMONS":
			return {
				...state,
				pokemons: { ...state.pokemons, loading: true, reload: false },
			};

		case "POKEMON_LIST":
			return {
				...state,
				pokemons: {
					data: action.payload,
					list: action.payload?.results,
					loading: false,
					reload: false,
				},
			};

		case "LOADING_DETAIL":
			return {
				...state,
				detail: { loading: true, data: null },
			};

		case "DETAILS":
			return {
				...state,
				detail: { loading: false, data: action.payload },
			};
		case "ADD_TO_DECK":
			return {
				...state,
				mydex: [action.payload, ...state.mydex],
			};
		case "REMOVE_FROM_DECK":
			return {
				...state,
				mydex: state.mydex.filter((pokemon) => pokemon.id !== action.payload),
			};
		default:
			return state;
	}
};

export default PokemonReducer;
