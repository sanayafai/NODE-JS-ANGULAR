import {Module} from '@nestjs/common';
import {TypeOrmModule} from '@nestjs/typeorm';
import {UserController} from './user.controller';
import {UserService} from './user.service';
import {UserEntity} from './user.entity';
import {UserResolver} from './user.resolver';
import {CommentService} from '../comment/comment.service';
import {CommentEntity} from '../comment/comment.entity';
import {IdeaEntity} from '../idea/idea.entity';

@Module({
    imports: [TypeOrmModule.forFeature([UserEntity, IdeaEntity, CommentEntity])],
    controllers: [UserController],
    providers: [UserService, UserResolver, CommentService],
})
export class UserModule {
}
