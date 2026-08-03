"use strict";
// app.ts
Object.defineProperty(exports, "__esModule", { value: true });
const UserService_1 = require("./services/UserService");
const service = new UserService_1.UserService();
console.log(service.getUser());
