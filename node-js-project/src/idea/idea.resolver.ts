import {Args, Parent, Query, ResolveProperty, Resolver} from '@nestjs/graphql';
import {IdeaService} from './idea.service';
import {CommentService} from '../comment/comment.service';

@Resolver('Idea')
export class IdeaResolver {

    constructor(private ideaService: IdeaService, private commentService: CommentService) {
    }

    @Query('ideas')
    async ideas(@Args('page') page: number) {
        return await this.ideaService.showAll(page);
    }

    @ResolveProperty()
    comments(@Parent() idea) {
        const {id} = idea;
        return this.commentService.showByIdea(id);
    }

}
