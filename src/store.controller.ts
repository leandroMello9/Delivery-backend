import { Body, Controller, Get, HttpException, HttpStatus, Inject, Post, Req, Res, UseGuards } from '@nestjs/common';
import { Request, Response } from 'express';
import { CreateStoreDto } from './dtos/request/CreateStoreDto';
import { CreateStoreInterface } from './useCases/Store/CreateStoreInterface';
import { AuthGuard } from './midlewares/auth';
import { userIdSignIn } from './context/User';
import { User } from './models/User';

@Controller('store')
export class StoreController {
  constructor(
     @Inject("CreateStoreInterface") private readonly createStore: CreateStoreInterface
  ) {}

  @Get('/usersGet')
  getHello(): string {
    return "Hello World"
  }



  @UseGuards(AuthGuard)
  @Post("/createStore")
  async create(@Body() store: CreateStoreDto, @Req() request: Request, @Res() response: Response ) {
       try {


         const userCreated = await this.createStore.create(
          store,
          request['user']

         )
         return response.status(HttpStatus.CREATED).json(userCreated);
       
       }catch(error) {
         throw new HttpException({
           status: HttpStatus.BAD_REQUEST,
           error: 'Erro ao criar a loja, verifique se esse prestador já possui ula loja!'
         }, HttpStatus.BAD_REQUEST, {
           cause: error
         })
       }
  }
}
