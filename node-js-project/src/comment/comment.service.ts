import {HttpException, HttpStatus, Injectable} from '@nestjs/common';
import {InjectRepository} from '@nestjs/typeorm';
import {CommentEntity} from './comment.entity';
import {Repository} from 'typeorm';
import {IdeaEntity} from '../idea/idea.entity';
import {UserEntity} from '../user/user.entity';
import {CommentDto} from './comment.dto';

@Injectable()
export class CommentService {

    constructor(@InjectRepository(CommentEntity) private commentRespository: Repository<CommentEntity>,
                @InjectRepository(IdeaEntity) private ideaRepository: Repository<IdeaEntity>,
                @InjectRepository(UserEntity) private userRepository: Repository<UserEntity>) {
    }

    async showByIdea(id: string, page: number = 1) {
        const comments = await this.commentRespository.find({
            where: {idea: {id}},
            relations: ['author'], take: 10, skip: 10 * (page - 1),
        });
        return comments.map(comment => this.toResponseObject(comment));
    }

    async showByUser(id: string, page: number = 1) {
        const comments = await this.commentRespository.find({
            where: {author: {id}},
            relations: ['author'],
            take: 10,
            skip: 10 * (page - 1),
        });
        return comments.map(comment => this.toResponseObject(comment));
    }

    async show(id: string) {
        const comment = await this.commentRespository.findOne({where: {id}, relations: ['author', 'idea']});
        return this.toResponseObject(comment);
    }

    async create(ideaId: string, userId: string, data: CommentDto) {

        const idea = await this.ideaRepository.findOne({where: {id: ideaId}});
        const user = await this.userRepository.findOne({where: {id: userId}});

        const comment = await this.commentRespository.create({...data, idea, author: user});
        await this.commentRespository.save(comment);
        return this.toResponseObject(comment);
    }

    async destroy(id: string, userId: string) {

        const comment = await this.commentRespository.findOne({where: {id}, relations: ['author', 'idea']});
        if (comment.author.id !== userId) {
            throw new HttpException('You do not own this comment', HttpStatus.UNAUTHORIZED);
        }

        await this.commentRespository.remove(comment);
        return this.toResponseObject(comment);
    }

    private toResponseObject(comment: CommentEntity) {
        const responseObject: any = comment;
        if (comment.author) {
            responseObject.author = comment.author.toResponseObject(false);
        }
        return responseObject;
    }
}
