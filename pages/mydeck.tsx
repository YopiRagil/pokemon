/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable @next/next/no-img-element */
import type { NextPage } from "next";
import { useSelector } from "react-redux";
import PokemonCard from "../components/PokemonCard";

const MyDeck: NextPage = () => {
	const pokemons = useSelector((state: IState) => state.pokemon.mydex);
	return (
		<div className="relative">
			<p className="font-bold sticky top-0 bg-yellow-500 p-2 rounded text-white">
				My Pokemon Deck
			</p>
			<div className="bg-white flex flex-wrap">
				{pokemons?.map((pokemon, index) => (
					<PokemonCard key={index} {...pokemon} />
				))}
			</div>
		</div>
	);
};

export default MyDeck;
