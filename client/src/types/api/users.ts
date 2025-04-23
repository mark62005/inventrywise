import { User } from "../prismaTypes";

export interface IUser extends User {
	id: string;
	name: string;
	email: string;
}
