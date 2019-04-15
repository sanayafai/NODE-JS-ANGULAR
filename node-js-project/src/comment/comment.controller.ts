import {Body, Controller, Delete, Get, Param, Post, Query, UseGuards, UsePipes} from '@nestjs/common';
import {CommentService} from './comment.service';
import {AuthGuard} from '../shared/auth.guard';
import {ValidationPipe} from '../shared/validation.pipe';
import {User} from '../user/user.decorator';
import {CommentDto} from './comment.dto';

@Controller('api/comments')
export class CommentController {

    constructor(private commentService: CommentService) {
    }

    @Get('idea/:id')
    showCommnetsByIdea(@Param('id') idea: string, @Query('page') page: number) {
        return this.commentService.showByIdea(idea, page);
    }

    @Get('user/:id')
    showCommnetsByUser(@Param('id') user: string, @Query('page') page: number) {
        return this.commentService.showByUser(user, page);
    }

    @Post('idea/:id')
    @UseGuards(new AuthGuard())
    @UsePipes(new ValidationPipe())
    createComment(@Param('id') idea: string, @User('id') user: string, @Body() data: CommentDto) {
        return this.commentService.create(idea, user, data);
    }

    @Get(':id')
    showComment(@Param('id') id: string) {
        return this.commentService.show(id);
    }

    @Delete(':id')
    @UseGuards(new AuthGuard())
    destroyComment(@Param('id') id: string, @User('id') user: string) {
        return this.commentService.destroy(id, user);
    }
}
