import { cn } from "@/lib/utils";

function Button({
	className,
	variant = "default",
	children,
	...props
}: React.ComponentProps<"button"> & {
	variant?: "default" | "secondary";
}) {
	let variantClassName = "";
	switch (variant) {
		case "default":
			variantClassName =
				"bg-blue-500 text-gray-100 hover:bg-blue-500/90 hover:text-gray-100/90";
			break;
		case "secondary":
			variantClassName =
				"bg-gray-500 text-gray-100 hover:bg-gray-500/90 hover:text-gray-100/90";
			break;

		default:
			variantClassName =
				"bg-blue-500 text-gray-100 hover:bg-blue-500/90 hover:text-gray-100/90";
			break;
	}

	return (
		<button
			type="submit"
			className={cn(
				"px-4 py-2 rounded-md cursor-pointer disabled:pointer-events-none disabled:opacity-50",
				variantClassName,
				className
			)}
			{...props}
		>
			{children}
		</button>
	);
}
export default Button;
