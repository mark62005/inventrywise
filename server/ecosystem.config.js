module.exports = {
	apps: [
		{
			name: "inventrywise",
			script: "pnpm",
			args: "dev",
			interpreter: "none",
			env_development: {
				NODE_ENV: "development",
				PORT: "5001",
			},
		},
	],
};
