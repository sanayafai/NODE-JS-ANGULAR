import {User} from '@app/models/user';

export interface Idea {
  id: string;
  created: Date;
  updated: Date;
  idea: string;
  desciption: string;
  author: User;
  upvotes?: number;
  downvotes?: number;
}

export interface IdeaDTO {
  idea: string;
  desciption: string;
}
