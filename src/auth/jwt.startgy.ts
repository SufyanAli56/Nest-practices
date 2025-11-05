import { Injectable } from '@nestjs/common';
import { PassportStrategy } from '@nestjs/passport';
import { ExtractJwt, Strategy } from 'passport-jwt';
import { ConfigService } from '@nestjs/config';

@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy) {
  constructor(configService: ConfigService) {
    super({
      jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(), // extract JWT from "Authorization: Bearer <token>"
      ignoreExpiration: false, // reject expired tokens
      secretOrKey: configService.get<string>('MY_JWT_KEY'), // read secret from .env
    });
  }

  async validate(payload: any) {
    // This method runs automatically after token validation
    // You can attach anything here to req.user
    return { userId: payload.sub, email: payload.email };
  }
}
