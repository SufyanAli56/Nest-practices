import {
    Controller,
    Post,
    Body,
    Get,
    UseGuards,
    Req,
  } from '@nestjs/common';
  import { AuthService } from './auth.service';
  import { AuthGuard } from '@nestjs/passport';
  import { Request } from 'express';

  interface RequestWithUser extends Request {
    user: {
      userId: string;
      email: string;
    };
  }
  
  @Controller('auth')
  export class AuthController {
    constructor(private readonly authService: AuthService) {}
  

    @Post('signup')
    async signup(
      @Body('email') email: string,
      @Body('password') password: string,
    ) {
      return this.authService.signup(email, password);
    }
  

    @Post('login')
    async login(
      @Body('email') email: string,
      @Body('password') password: string,
    ) {
      return this.authService.login(email, password);
    }
  

    @UseGuards(AuthGuard('jwt'))
    @Get('profile')
    getProfile(@Req() req: RequestWithUser) {
      return req.user;
    }
  }
  