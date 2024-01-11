import { ExecutionContext, CanActivate } from "@nestjs/common";
import { JwtService } from "@nestjs/jwt";
export declare class AuthGuard implements CanActivate {
    private jwtService;
    constructor(jwtService: JwtService);
    canActivate(context: ExecutionContext): Promise<any>;
    private extractTokenFromHeader;
}
