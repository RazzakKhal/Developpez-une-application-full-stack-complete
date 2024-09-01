import { Article } from "./Article";
import { Comment } from "./Comment";
import { Subscription } from "./Subscription";

export interface User {
  id: number;

  email: string;

  name: string;

  createdAt: Date;

  subscriptions: Subscription[];

  comments: Comment[];

  articles: Article[];



}





