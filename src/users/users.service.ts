import { Injectable } from "@nestjs/common";
import * as bcrypt from "bcrypt";
import { InjectModel } from "@nestjs/mongoose";
import { Model } from "mongoose";
import { User } from "./user.schema";

@Injectable()
export class UsersService {
    constructor(@InjectModel(User.name) private userModel: Model <User>) {}
        async findOne(username: string): Promise<User | null> {
               return this.userModel.findOne({username}).exec();
        }
     
        async create(username: string, password: string, role: string = 'user'): Promise<User>{
            const hashedPassword = await bcrypt.hash(password, 10)
            const newUser = new this.userModel({username, password: hashedPassword, role});
            return newUser.save();

        }
        async validateUser( username: string, password: string): Promise<User | null> {
            const user = await this.findOne(username);
            if (user && (await bcrypt.compare(password, user.password))) {
                return user;
            }
            return null;
        }

}