/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable @next/next/no-img-element */
import type { NextPage } from "next";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import {
	detailPokemonURI,
	getPokemonData,
	setPokemonDetail,
} from "../store/storeAction/pokemon";
import { useRouter } from "next/router";

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

const PokemonCard = (props: any) => {
	const { name, url } = props;
	const dispatch = useDispatch();

	const route = useRouter();
	const changeRoute = () => {
		dispatch(setPokemonDetail(props));
		route.push("detail");
	};

	return (
		<div className="w-1/2 md:w-1/4 lg:w-1/6  flex justify-center">
			<div
				className="mb-4 flex flex-col items-center cursor-pointer"
				onClick={changeRoute}
			>
				<img
					alt="pokemon-picture"
					className="object-contain"
					src={props?.sprites?.front_default}
				/>
				<p className="capitalize font-bold bg-yellow-900 px-2 rounded text-white -mt-2 shadow-md">
					{name}
				</p>
			</div>
		</div>
	);
};

export default MyDeck;
