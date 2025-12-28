import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { User, UserDocument } from './schemas/user.schema';

@Injectable()
export class UserService {
    constructor(@InjectModel(User.name) private userModel: Model<UserDocument>) { }

    async createUser(email: string, password: string) {
        const exists = await this.userModel.findOne({ email });
        if (exists) throw new Error('User already exists');

        const user = new this.userModel({ email, password });
        return user.save();
    }

    async findByEmail(email: string) {
        return this.userModel.findOne({ email });
    }
}
