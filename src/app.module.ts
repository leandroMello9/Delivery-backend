import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from './models/User';
import { UsersModule } from './modules/user.module';
import { ConfigModule, ConfigService } from '@nestjs/config';
import typeormConfig from './config/typeorm.config';


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
    UsersModule
  ],
  controllers: [],
  providers: [],
  
  exports: []
})
export class AppModule {}
