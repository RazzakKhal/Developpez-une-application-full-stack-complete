import { Comment } from "./Comment";
import { Theme } from "./Theme";
import { User } from "./User";

export class Article{
  constructor(private id : number, private title : string, private content : string, private user : User, private theme : Theme, private createdAt : Date , private comments : Comment[]){}
}
