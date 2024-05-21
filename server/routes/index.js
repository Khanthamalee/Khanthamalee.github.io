"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var express = require("express");
// Import individual route profiles from controllers
var users_1 = require("./users");
var router = express.Router();
// Pass our router instance to controllers
router.use('/employeeapi', (0, users_1.default)(router));
exports.default = router;
