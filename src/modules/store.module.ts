import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Store } from 'src/models/Store';
import { StoreController } from 'src/store.controller';
import { CreateStore } from 'src/useCases/Store/CreateStore';

@Module({
  imports: [
    TypeOrmModule.forFeature([Store])
],
  controllers: [StoreController],
  providers: [
    {
    useClass: CreateStore,
    provide: 'CreateStoreInterface'
  },
],
  exports: [],
})

export class StoreModule {}