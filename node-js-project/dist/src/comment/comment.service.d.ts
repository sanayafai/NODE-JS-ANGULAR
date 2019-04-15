import { CommentEntity } from './comment.entity';
import { Repository } from 'typeorm';
import { IdeaEntity } from '../idea/idea.entity';
import { UserEntity } from '../user/user.entity';
import { CommentDto } from './comment.dto';
export declare class CommentService {
    private commentRespository;
    private ideaRepository;
    private userRepository;
    constructor(commentRespository: Repository<CommentEntity>, ideaRepository: Repository<IdeaEntity>, userRepository: Repository<UserEntity>);
    showByIdea(id: string, page?: number): Promise<any[]>;
    showByUser(id: string, page?: number): Promise<any[]>;
    show(id: string): Promise<any>;
    create(ideaId: string, userId: string, data: CommentDto): Promise<any>;
    destroy(id: string, userId: string): Promise<any>;
    private toResponseObject;
}
