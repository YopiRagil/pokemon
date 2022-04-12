/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable @next/next/no-img-element */
import type { NextPage } from "next";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { addToDeck, removeFromDeck } from "../store/storeAction/pokemon";
import { useRouter } from "next/router";
import { Content, Statistic } from "../components/DetailCOmponent";

const DetailPokemon: NextPage = () => {
	const detail = useSelector((state: IState) => state.pokemon.detail);
	const deck = useSelector((state: IState) => state.pokemon.mydex);
	const route = useRouter();
	const dispatch = useDispatch();

	useEffect(() => {
		if (!detail.data && !detail.loading) {
			route.push("/");
		}
	}, []);

	const isALreadyInDeck =
		deck?.filter((item) => item?.id === detail?.data?.id)?.length > 0 ||
		!detail?.data?.id;

	const moveOrRemoveToDeck = () => {
		if (isALreadyInDeck) {
			dispatch(removeFromDeck(detail?.data?.id));
		} else {
			dispatch(addToDeck(detail?.data));
		}
		route.push("mydeck");
	};
	return (
		<div className="bg-white">
			<p className="capitalize text-xl font-bold">{detail?.data?.name}</p>
			<img
				alt="pokemon-picture"
				className="object-contain"
				src={detail?.data?.sprites?.front_default}
			/>
			<div className="flex">
				{isALreadyInDeck ? (
					<p
						onClick={moveOrRemoveToDeck}
						className={`text-xs text-white font-semibold bg-gray-600 p-2 rounded shadow cursor-pointer`}
					>
						{"Remove from Deck"}
					</p>
				) : (
					<p
						onClick={moveOrRemoveToDeck}
						className={`text-xs text-white font-semibold bg-blue-400 p-2 rounded shadow cursor-pointer`}
					>
						{"Add To Deck"}
					</p>
				)}
			</div>
			<Statistic label="Statistic" data={detail?.data?.stats} />
			<Content label="Types" obKeys={"type"} data={detail?.data?.types} />
			<Content label="Moves" obKeys="move" data={detail?.data?.moves} />
		</div>
	);
};

export default DetailPokemon;
