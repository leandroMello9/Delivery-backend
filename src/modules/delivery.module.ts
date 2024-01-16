import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { DeliveryController } from 'src/delivery.controller';
import { Delivery } from 'src/models/Delivery';
import { Store } from 'src/models/Store';
import { CreateDelivery } from 'src/useCases/Delivery/CreateDelivery';

@Module({
  imports: [
    TypeOrmModule.forFeature([Store, Delivery])
],
  controllers: [DeliveryController],
  providers: [
     {
     useClass: CreateDelivery,
     provide: 'CreateDeliveryInterface'
   },
],
  exports: [],
})

export class DeliveryModule {}