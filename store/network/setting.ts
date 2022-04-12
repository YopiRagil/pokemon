export const bodyJson = () => {
	return { "Content-Type": "application/json" };
};

export const uri = process.env.NEXT_PUBLIC_API
	? process.env.NEXT_PUBLIC_API
	: "";
