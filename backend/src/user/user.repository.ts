import { Injectable } from "@nestjs/common";
import { InjectModel } from "@nestjs/mongoose";
import { Model } from "mongoose";
import { User, UserDocument } from "./schemas/user.schema";

@Injectable()
export class UserRepository {
    constructor(@InjectModel(User.name) private userModel: Model<UserDocument>) { }

    public async createUser(user: UserDocument): Promise<User> {

        const newUser = new this.userModel({
            email: user.email,
            password: user.password, // Todo hash 
        });

        return this.userModel.create(newUser);

    }

    public async readUser(email: string): Promise<UserDocument | null> {
        return this.userModel.findOne({ email }).lean<UserDocument>().exec();
    }
}