import { HomeIcon, InboxIcon } from "@heroicons/react/solid";
import { useRouter } from "next/router";

const Menus = (props: any) => {
	const route = useRouter();
	const changeRoute = (routeName: string) => {
		route.push(routeName);
	};

	const data = [
		{
			route: "/",
			name: "Home",
			icon: <HomeIcon className="h-10 w-10 text-white" />,
		},
		{
			route: "/mydeck",
			name: "My Deck",
			icon: <InboxIcon className="h-10 w-10 text-white" />,
		},
	];
	return (
		<div className="relative">
			<div className="p-2">{props.pages}</div>
			<div className="h-20 " />
			<div className="fixed z-40 bottom-0 w-full bg-yellow-500 p-2 flex">
				{data.map((element, index) => (
					<div key={index} className="w-1/2 flex justify-center">
						<div
							className="flex flex-col items-center"
							onClick={() => changeRoute(element.route)}
						>
							{element.icon}
							<p
								className={`text-white text-sm md:text-base ${
									route.route === element.route ? "font-bold" : ""
								}`}
							>
								{element.name}
							</p>
						</div>
					</div>
				))}
			</div>
		</div>
	);
};

export default Menus;
