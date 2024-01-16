import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UsersModule } from './modules/user.module';
import { ConfigModule, ConfigService } from '@nestjs/config';
import typeormConfig from './config/typeorm.config';
import { AuthModule } from './modules/auth.module';
import { StoreModule } from './modules/store.module';
import { DeliveryModule } from './modules/delivery.module';


@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      load: [typeormConfig],
    }),
    TypeOrmModule.forRootAsync({
      inject: [ConfigService],
      useFactory: async (configService: ConfigService) => {
        return configService.get('typeorm');
      },
    }),
    
    UsersModule,
    AuthModule,
    StoreModule,
    DeliveryModule
  ],
  controllers: [],
  providers: [],
  
  exports: []
})
export class AppModule {}
