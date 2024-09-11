import { Comment } from "./Comment";
import { Theme } from "./Theme";
import { User } from "./User";

export interface Article{
   id : number;

   title : string;

   content : string;

   user : User;

   theme : Theme;

   createdAt : Date;

   comments : Comment[]
}
