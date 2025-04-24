export interface UserSetting {
	label: string;
	value: string | boolean;
	type: "text" | "toggle";
}
