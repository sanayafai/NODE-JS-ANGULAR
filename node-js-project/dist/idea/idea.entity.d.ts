import { UserEntity } from '../user/user.entity';
import { CommentEntity } from '../comment/comment.entity';
export declare class IdeaEntity {
    id: string;
    created: Date;
    idea: string;
    desciption: string;
    author: UserEntity;
    updated: Date;
    upvotes: UserEntity[];
    downvotes: UserEntity[];
    comments: CommentEntity[];
}
