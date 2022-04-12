interface IPokemon {
	pokemons: IPokeList;
	mydex: any[];
	detail: IDetail;
}

interface IPokeList {
	data: any;
	list: any[];
	loading: boolean;
	reload: boolean;
}

interface IDetail {
	data: any;
	loading: boolean;
}

type TAction = {
	type: string;
	payload?: any;
};

type DispatcType = (args: TAction | Function) => TAction;

interface IState {
	pokemon: IPokemon;
}

type TParamsPokeList = {
	limit: number;
	offset: number;
};
