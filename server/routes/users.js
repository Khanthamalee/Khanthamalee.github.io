"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var users_1 = require("../controllers/users");
var employeeRoutes = function (router) {
    router.get('/employeeapi', users_1.getPosts);
    return router;
};
exports.default = employeeRoutes;
