/* eslint-disable @next/next/no-img-element */
import { useDispatch } from "react-redux";
import { setPokemonDetail } from "../store/storeAction/pokemon";
import { useRouter } from "next/router";

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

export default PokemonCard;
