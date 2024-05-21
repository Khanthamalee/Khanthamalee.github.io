import type { Request, Response, NextFunction } from 'express';
import type { Root } from './types';
import axios, { AxiosResponse } from 'axios';
import {Finddepartment} from "../../function/Arrangedata";

export const getPosts = async (req: Request, res: Response, next: NextFunction) => {
  // get some posts
  try{
      const result: AxiosResponse = await axios.get(`https://dummyjson.com/users`);

       //จัดเรียงข้อมูลให้อยู่ในรูปแบบตามโจทย์
      const data = result.data.users;
      let namedepartment = new Set();

      //หา Department ทั้งหมด
      for (var fem in data ){
          namedepartment.add(result.data.users[fem].company.department)
      }   
      //data ทั้งหมด
      const alldata:[] = result.data.users;
      //input data ทั้งหมดเข้าไปใน function แล้วเก็บไว้ในตัวแปร Department 
      let Department:any = new Array();
      for(var dep in Array.from(namedepartment)){
          let arraydep = Array.from(namedepartment)[dep]
          let department = Finddepartment(`${arraydep}`,alldata)
          Department.push(department)   
      }
      console.log(Department);
      const results:Root = Department;
      return res.status(200).send(results);
  } catch(error)    {
      const errMsg = error instanceof Error ? error.message : 'there is was an error...';
      console.log(errMsg)
      res.status(500).send(errMsg);
  }
};

export default {
  getPosts
};