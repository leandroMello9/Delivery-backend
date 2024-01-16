import { Body, Controller, HttpException, HttpStatus, Inject, Post, Req, Res, UseGuards } from '@nestjs/common';
import { Request, Response } from 'express';
import { AuthGuard } from './midlewares/auth';
import { CreateDeliveryInterface } from './useCases/Delivery/CreateDeliveryInterface';
import { CreateDeliveryDTO } from './dtos/request/CreateDeliveryDto';



@Controller('delivery')
export class DeliveryController {
  constructor(
     @Inject("CreateDeliveryInterface") private readonly createDelivery: CreateDeliveryInterface
  ) {}





  @UseGuards(AuthGuard)
  @Post("/createDelivery")
  async create(@Body() delivery: CreateDeliveryDTO, @Req() request: Request, @Res() response: Response ) {
       try {


         const deliveryCreated = await this.createDelivery.createDelivery(
          delivery,
          request['user']

         )
         return response.status(HttpStatus.CREATED).json(deliveryCreated);
       
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
           status: HttpStatus.INTERNAL_SERVER_ERROR,
           error: 'Erro ao criar a delivery!'
         }, HttpStatus.INTERNAL_SERVER_ERROR, {
           cause: error
         })
       }
  }
}
