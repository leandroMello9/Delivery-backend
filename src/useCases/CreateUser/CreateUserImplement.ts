import { Injectable } from '@nestjs/common';
import CreateUserInterface from './CreateUserInterface';

@Injectable()
export class CreateUser implements CreateUserInterface {
  async execute(): Promise<any> {
    return;
  }
}
