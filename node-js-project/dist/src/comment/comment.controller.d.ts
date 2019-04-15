import { CommentService } from './comment.service';
import { CommentDto } from './comment.dto';
export declare class CommentController {
    private commentService;
    constructor(commentService: CommentService);
    showCommnetsByIdea(idea: string, page: number): Promise<any[]>;
    showCommnetsByUser(user: string, page: number): Promise<any[]>;
    createComment(idea: string, user: string, data: CommentDto): Promise<any>;
    showComment(id: string): Promise<any>;
    destroyComment(id: string, user: string): Promise<any>;
}
