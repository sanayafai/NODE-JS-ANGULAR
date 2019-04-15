import {Module} from '@nestjs/common';
import {TypeOrmModule} from '@nestjs/typeorm';
import {GraphQLModule} from '@nestjs/graphql';
import {AppController} from './app.controller';
import {AppService} from './app.service';
import {IdeaModule} from './idea/idea.module';
import {APP_FILTER, APP_INTERCEPTOR} from '@nestjs/core';
import {HttpErrorFilter} from './shared/http-error.filter';
import {AppGateway} from './app.gateway';
import {LoggingInterceptor} from './shared/logging.interceptor';
import {UserModule} from './user/user.module';
import {CommentModule} from './comment/comment.module';

@Module({
    imports: [TypeOrmModule.forRoot(), IdeaModule, UserModule, CommentModule,
        GraphQLModule.forRoot({
            typePaths: ['./**/*.graphql'],
            context: ({req}) => ({headers: req.headers}),
        })],
    controllers: [AppController],
    providers: [AppService, AppGateway, {provide: APP_FILTER, useClass: HttpErrorFilter}, {
        provide: APP_INTERCEPTOR,
        useClass: LoggingInterceptor,
    }],

})
export class AppModule {
}
