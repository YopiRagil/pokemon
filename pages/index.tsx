/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable @next/next/no-img-element */
import type { NextPage } from "next";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { detailPokemonURI, getPokemonData } from "../store/storeAction/pokemon";
import { useRouter } from "next/router";

const Home: NextPage = () => {
	const pokemons = useSelector((state: IState) => state.pokemon.pokemons);
	const dispatch = useDispatch();
	const [search, setSearch] = useState("");

	useEffect(() => {
		dispatch(getPokemonData());
	}, []);

	const pokemonList = search
		? pokemons.list?.filter((el) =>
				el?.name?.toLowerCase()?.includes(search.toLowerCase()),
		  )
		: pokemons.list;

	return (
		<div className="bg-white">
			<div className="font-bold sticky top-0 bg-yellow-500 p-2 rounded text-white mb-2">
				<input
					onChange={({ target }) => setSearch(target.value)}
					value={search}
					placeholder="Search"
					className="px-4 py-2 w-full text-gray-500"
				/>
			</div>
			<div className="flex flex-wrap">
				{pokemonList?.map((pokemon, index) => (
					<PokemonCard key={index} {...pokemon} />
				))}
			</div>
		</div>
	);
};

const PokemonCard = (props: any) => {
	const { name, url } = props;
	const dispatch = useDispatch();

	const route = useRouter();
	const changeRoute = () => {
		dispatch(detailPokemonURI(url));
		route.push("detail");
	};

	return (
		<div className="w-1/2 md:w-1/4 lg:w-1/6 flex justify-center">
			<div
				className="mb-4 flex flex-col items-center cursor-pointer"
				onClick={changeRoute}
			>
				<div className="bg-gradient-to-r from-yellow-600 via-yellow-200 to-yellow-100 w-32 h-36  flex justify-center items-center rounded-full" />
				<p className="capitalize font-bold bg-yellow-900 px-2 rounded text-white -mt-2 shadow-md">
					{name}
				</p>
			</div>
		</div>
	);
};

export default Home;
