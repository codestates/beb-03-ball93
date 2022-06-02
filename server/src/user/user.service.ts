import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { User } from 'src/entities/user.entity';
import { CreateUserInput } from './create-user.input';
import { UpdateUserInput } from './update-user.input';

@Injectable()
export class UserService {
  constructor(
    @InjectModel(User.name)
    private readonly userModel: Model<User>,
  ) {}

  create(createUserInput: CreateUserInput) {
    const isUserExist = this.userModel.exists({
      userId: createUserInput.userId,
      walletAddress: createUserInput.walletAddress,
    });
    console.log(isUserExist._mongooseOptions.lean);

    if (isUserExist) {
      throw new NotFoundException(`User duplicate values check your Query!!`);
    }

    const user = new this.userModel(createUserInput);

    return user.save();
  }

  findAll() {
    return this.userModel.find().exec();
  }

  async findOne(walletAddress: string) {
    const user = await this.userModel
      .findOne({ walletAddress: walletAddress })
      .exec();

    if (!user) {
      throw new NotFoundException(`User ${walletAddress} not found`);
    }

    return user;
  }

  async update(walletAddress: string, updateUser: UpdateUserInput) {
    const existringUser = await this.userModel
      .findOneAndUpdate(
        {
          walletAddress: walletAddress,
        },
        { $set: updateUser },
        { new: true },
      )
      .exec();
    if (!existringUser) {
      throw new NotFoundException(`User ${walletAddress} not found`);
    }

    return existringUser;
  }

  async remove(walletAddress: string) {
    const user = await this.findOne(walletAddress);
    return user.remove();
  }
}
