import { SerializedUser, User } from 'src/users/types/User';
export declare class UsersService {
    private users;
    getUsers(): SerializedUser[];
    getUserByUsername(username: string): User;
    getUserById(id: number): User;
}
