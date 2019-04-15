import {IsString} from 'class-validator';
import {UserRO} from '../user/user.dto';

export class IdeaDTO {
    @IsString()
    idea: string;

    @IsString()
    desciption: string;
}

export class IdeaRO {
    id?: string;
    updated: Date;
    created: Date;
    idea: string;
    desciption: string;
    author: UserRO;
    upvotes?: number;
    downvotes?: number;

}
