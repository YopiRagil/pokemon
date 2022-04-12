/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable @next/next/no-img-element */
import type { NextPage } from "next";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { getPokemonData } from "../store/storeAction/pokemon";
import PokemonEggCard from "../components/EggCard";

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
					<PokemonEggCard key={index} {...pokemon} />
				))}
			</div>
		</div>
	);
};

export default Home;
