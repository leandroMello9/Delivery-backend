import { Body, Controller, Get, HttpException, HttpStatus, Inject, Post, Req, Res, UseGuards } from '@nestjs/common';
import { Request, Response } from 'express';
import { CreateStoreDto } from './dtos/request/CreateStoreDto';
import { CreateStoreInterface } from './useCases/Store/CreateStoreInterface';
import { AuthGuard } from './midlewares/auth';
import { TypeORMError } from 'typeorm';


interface Err {
  message?: string
}
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
       

        if(error instanceof Error) {
          throw new HttpException({
            status: HttpStatus.BAD_REQUEST,
            error: error.message
          }, HttpStatus.BAD_REQUEST, {
            cause: error
          })
        }
       
         throw new HttpException({
           status: HttpStatus.BAD_REQUEST,
           error: 'Erro ao criar a loja, verifique se esse prestador já possui uma loja!'
         }, HttpStatus.BAD_REQUEST, {
           cause: error
         })
       }
  }
}
