import { UserEntity } from '../user/user.entity';
import { IdeaEntity } from '../idea/idea.entity';
export declare class CommentEntity {
    id: string;
    created: Date;
    comment: string;
    author: UserEntity;
    idea: IdeaEntity;
}
