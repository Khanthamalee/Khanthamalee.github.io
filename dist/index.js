"use strict";
//API
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const axios_1 = __importDefault(require("axios"));
const Arrangedata_1 = require("./Arrangedata");
const getPosts = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    // get some posts
    try {
        const result = yield axios_1.default.get(`https://dummyjson.com/users`);
        //จัดเรียงข้อมูลให้อยู่ในรูปแบบตามโจทย์
        let data = result.data.users;
        let namedepartment = new Set();
        //หา Department ทั้งหมด
        for (var fem in data) {
            namedepartment.add(result.data.users[fem].company.department);
        }
        //data ทั้งหมด
        const alldata = result.data.users;
        //input data ทั้งหมดเข้าไปใน function แล้วเก็บไว้ในตัวแปร Department 
        let Department = new Array();
        for (var dep in Array.from(namedepartment)) {
            let arraydep = Array.from(namedepartment)[dep];
            let department = (0, Arrangedata_1.Finddepartment)(`${arraydep}`, alldata);
            Department.push(department);
        }
        console.log(Department);
        return res.status(200).json({
            Department
        });
    }
    catch (error) {
        const errMsg = error instanceof Error ? error.message : 'there is was an error...';
        console.log(errMsg);
        return [];
    }
});
exports.default = { getPosts };
const app = (0, express_1.default)();
const port = 4000;
app.get('/', getPosts);
//เริ่มรัน server แล้วเราเข้าไปดูที่ localhost:4000 จะเจอ Hello! This is Typescript API
app.listen(port, () => __awaiter(void 0, void 0, void 0, function* () {
    console.log(`server is running ${port}`);
}));
