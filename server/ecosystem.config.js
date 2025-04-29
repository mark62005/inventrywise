module.exports = {
	app: [
		{
			name: "inventrywise",
			script: "pnpm",
			args: "run dev",
			env_development: {
				NODE_ENV: "development",
				PORT: "5001",
			},
		},
	],
};
