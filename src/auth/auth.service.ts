import { Injectable } from '@nestjs/common';
import { UsersService } from '../users/users.service';
import { JwtService } from '@nestjs/jwt';
@Injectable()
export class AuthService {
    constructor (
        private usersService : UsersService,
        private jwtService: JwtService,
    ) {}
    async validateUser(username: string, password: string): Promise<any>{
         const user = await this.usersService.validateUser(username, password);
         if(user) {
            const {password, ...result} = user;
            return result;
         }
         return null;
    }

    async login(user: any){
        const payload = {username: user.username, sub: user.id, role: user.role};
        return {
            access_token: this.jwtService.sign(payload),
        };
    }
    async register(username: string, password: string, role: string = 'user'){
        const existringUser = await this.usersService.findOne(username);

        if (existringUser) {
            throw new Error (
                'Username already exists'
            );
        
        }
        const user = await this.usersService.create(username, password, role);
        const {password: _, ...result} = user.toObject();
        return this.login(result);
    }

}