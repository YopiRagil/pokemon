import { useDispatch } from "react-redux";
import { detailPokemonURI } from "../store/storeAction/pokemon";
import { useRouter } from "next/router";

const PokemonEggCard = (props: any) => {
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

export default PokemonEggCard;
