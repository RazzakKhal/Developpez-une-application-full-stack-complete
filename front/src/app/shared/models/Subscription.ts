import { Theme } from "./Theme";
import { User } from "./User";

export class Subscription {
  constructor(private id : number, private user : User, private theme : Theme){}
}
