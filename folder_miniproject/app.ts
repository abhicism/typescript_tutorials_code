// app.ts

import { UserService } from "./services/UserService";

const service = new UserService();

console.log(service.getUser());