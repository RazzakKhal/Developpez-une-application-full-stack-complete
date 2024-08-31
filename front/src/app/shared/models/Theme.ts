import { Subscription } from "./Subscription";

export class Theme{
  constructor(private id : number, private name : string, private description : string, private subscription : Subscription[] = []){}
}
