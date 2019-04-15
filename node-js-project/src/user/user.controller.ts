import {Body, Controller, Get, Param, Post, Query, UseGuards, UsePipes, ValidationPipe} from '@nestjs/common';
import {UserService} from './user.service';
import {UserDTO} from './user.dto';
import {AuthGuard} from "../shared/auth.guard";
import {User} from "./user.decorator";

@Controller()
export class UserController {

    constructor(private userService: UserService) {
    }

    @Get('api/users')
    showAllUsers(@Query('page') page: number) {
        return this.userService.showAll(page);
    }

    @Get('api/users/:username')
    showOneUser(@Param('username') username: string) {
        return this.userService.read(username);
    }

    @Get('auth/whoami')
    @UseGuards(new AuthGuard())
    showMe(@User('username') username: string) {
        return this.userService.read(username);
    }

    @Post('auth/login')
    @UsePipes(new ValidationPipe())
    login(@Body() data: UserDTO) {
        return this.userService.login(data);
    }

    @Post('auth/register')
    @UsePipes(new ValidationPipe())
    register(@Body() data: UserDTO) {
        return this.userService.register(data);
    }
}
