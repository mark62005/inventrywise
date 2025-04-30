import { dirname } from "path";
import { fileURLToPath } from "url";
import { FlatCompat } from "@eslint/eslintrc";
import { fixupConfigRules } from "@eslint/compat";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const compat = new FlatCompat({
	baseDirectory: __dirname,
});

const eslintConfig = [
	{
		ignores: ["src/types/prismaTypes.d.ts"],
	},
	...fixupConfigRules(
		compat.extends("next/core-web-vitals", "next/typescript")
	),
];

export default eslintConfig;
