// services/UserService.ts

import { User } from "../models/User";

export class UserService {

    getUser(): User {
        return {
            id: 1,
            name: "Abhishek",
            email: "abhishek@example.com"
        };
    }

}