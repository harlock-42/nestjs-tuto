import { Injectable } from '@nestjs/common';
import { plainToClass, plainToInstance } from 'class-transformer';
import { SerializedUser, User } from 'src/users/types/User';

@Injectable()
export class UsersService {
	private users: User[] = [
		{
			id: 1,
			username: 'harlock',
			password: 'harlock',
		},
		{
			id: 2,
			username: 'mazone',
			password: 'mazone',
		},
		{
			id: 3,
			username: 'jean',
			password: 'jean',
		}
	]

	getUsers() {
		return this.users.map((user) => new SerializedUser(user));
	}

	getUserByUsername(username: string) {
		return this.users.find((user) => user.username === username);
	}

	getUserById(id: number) {
		return this.users.find((user) => user.id === id);
	}
}
