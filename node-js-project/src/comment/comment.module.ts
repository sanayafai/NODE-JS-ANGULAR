import {Module} from '@nestjs/common';
import {TypeOrmModule} from '@nestjs/typeorm';
import {CommentController} from './comment.controller';
import {CommentService} from './comment.service';
import {UserEntity} from '../user/user.entity';
import {IdeaEntity} from '../idea/idea.entity';
import {CommentEntity} from './comment.entity';

@Module({
    imports: [TypeOrmModule.forFeature([IdeaEntity, UserEntity, CommentEntity])],
    controllers: [CommentController],
    providers: [CommentService],
})
export class CommentModule {
}
