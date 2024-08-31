import { Article } from "./Article";
import { User } from "./User";

export class Comment{
  constructor(private id : number, private content : string, private user : User, private article : Article){}
}


