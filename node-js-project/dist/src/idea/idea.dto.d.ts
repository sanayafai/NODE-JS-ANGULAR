import { UserRO } from '../user/user.dto';
export declare class IdeaDTO {
    idea: string;
    desciption: string;
}
export declare class IdeaRO {
    id?: string;
    updated: Date;
    created: Date;
    idea: string;
    desciption: string;
    author: UserRO;
    upvotes?: number;
    downvotes?: number;
}
