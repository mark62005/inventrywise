import { PageTitleProps } from "@/types/app/components";

const PageTitle = ({ name }: PageTitleProps) => {
	return <h1 className="text-2xl font-semibold text-gray-700">{name}</h1>;
};

export default PageTitle;
