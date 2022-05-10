import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { User } from 'src/entities/user.entity';
import { CreateUserInput } from './create-user.input';
import { UpdateUserInput } from './update-user.input';
@Injectable()
export class UsersService {
  constructor(
    @InjectModel(User.name)
    private readonly userModel: Model<User>,
  ) {}
  create(CreateUserInput: CreateUserInput) {
    const user = new this.userModel(CreateUserInput);
    return user.save();
  }

  findAll() {
    return this.userModel.find().exec();
  }

  async findOne(id: number) {
    const user = await this.userModel.findOne({ _id: id }).exec();
    if (!user) {
      throw new NotFoundException(`User ${id} not found`);
    }
    return user;
  }

  async update(id: number, UpdateUserInput: UpdateUserInput) {
    const existringUser = await this.userModel
      .findOne({ _id: id }, { $set: UpdateUserInput }, { new: true })
      .exec();

    if (!existringUser) {
      throw new NotFoundException(`User ${id} not found`);
    }
    return existringUser;
  }

  async remove(id: number) {
    const user = await this.findOne(id);
    return user.remove();
  }
}
