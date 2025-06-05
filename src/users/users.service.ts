import { Injectable } from '@nestjs/common';
import { CreateUserReqDto } from './models/dto/req/create-user.req.dto';
import { UpdateUserReqDto } from './models/dto/req/update-user.req.dto';

@Injectable()
export class UsersService {
  create(dto: CreateUserReqDto) {
    return 'This action adds a new user';
  }

  findAll() {
    return `This action returns all users`;
  }

  findOne(id: number) {
    return `This action returns a #${id} user`;
  }

  update(id: number, dto: UpdateUserReqDto) {
    return `This action updates a #${id} user`;
  }

  remove(id: number) {
    return `This action removes a #${id} user`;
  }
}
