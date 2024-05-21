"use strict";
var _a;
Object.defineProperty(exports, "__esModule", { value: true });
//ศึกษาจาก https://robkendal.co.uk/blog/build-a-restful-node-api-server-using-json-and-typescript/
require("module-alias/register");
var http = require("http");
var express = require("express");
var index_1 = require("./server/routes/index");
var router = express();
router.use(express.urlencoded({ extended: true }));
router.use(express.json());
router.use(function (req, res, next) {
    // set the CORS policy
    res.header('Access-Control-Allow-Origin', '*');
    // set the CORS headers
    res.header('Access-Control-Allow-Headers', 'origin,X-Requested-With,Content-Type,Accept,Authorization');
    // set the CORS method headers
    if (req.method === 'OPTIONS') {
        res.header('Access-Control-Allow-Methods', 'GET, PUT, POST, DELETE');
        return res.status(200).json({});
    }
    next();
});
router.use('/', index_1.default);
/** Error handling */
router.use(function (_, res) {
    var error = new Error('not found');
    return res.status(404).json({
        message: error.message,
    });
});
// Start that server
var httpServer = http.createServer(router);
var PORT = (_a = process.env.PORT) !== null && _a !== void 0 ? _a : 8080;
httpServer.listen(PORT, function () {
    return console.log("API server alive and kicking on port ".concat(PORT));
});
