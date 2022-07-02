import { UsersService } from 'src/users/service/users/users.service';
import { SerializedUser } from 'src/users/types/User';
export declare class UsersController {
    private readonly userService;
    constructor(userService: UsersService);
    getUsers(): SerializedUser[];
    getByUsername(username: string): SerializedUser;
    getById(id: number): SerializedUser;
}
