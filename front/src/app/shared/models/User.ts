import { Article } from "./Article";
import { Comment } from "./Comment";
import { Subscription } from "./Subscription";

export class User{
  constructor(private id : number, private email : string, private name : string, private createdAt : Date,
    private subscriptions : Subscription[] = [], private comments : Comment[] = [], private articles : Article[] = []
  ){}
}





