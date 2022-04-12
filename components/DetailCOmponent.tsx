/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable @next/next/no-img-element */
import React from "react";

export const Statistic = (props: any) => {
	const { data, label } = props;
	return (
		<div className="mb-2">
			<p className="capitalize text-base font-semibold">{label} :</p>
			<div className="flex flex-wrap">
				{data?.map((el: any, idx: number) => (
					<div key={idx} className="w-1/2 p-1">
						<p className="capitalize text-xs font-bold">{el?.stat?.name} :</p>
						<p className="text-xs">- Base Statistic : {el?.base_stat}</p>
						<p className="text-xs">- Effort : {el?.effort}</p>
					</div>
				))}
			</div>
		</div>
	);
};

export const Content = (props: any) => {
	const { data, label, obKeys } = props;
	return (
		<div className="mb-2">
			<p className="capitalize text-base font-semibold mb-1">{label} :</p>
			<div className="flex gap-2 flex-wrap">
				{data?.map((el: any, idx: number) => (
					<p
						key={idx}
						className="px-2 bg-gray-700 text-white rounded text-sm pb-1"
					>
						{el?.[obKeys]?.name}
					</p>
				))}
			</div>
		</div>
	);
};
