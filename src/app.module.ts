import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from './models/User';
import { UsersModule } from './modules/user.module';
import { ConfigModule, ConfigService } from '@nestjs/config';
import typeormConfig from './config/typeorm.config';
import { AuthModule } from './modules/auth.module';


@Module({
  imports: [
    // ConfigModule.forRoot({
    //   isGlobal: true,
    //   load: [typeormConfig],
    // }),
    // TypeOrmModule.forRootAsync({
    //   inject: [ConfigService],
    //   useFactory: async (configService: ConfigService) => {
    //     return configService.get('typeorm');
    //   },
    // }),
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'localhost',
      port: 5432,
      username: 'leo',
      password: '1234',
      database: 'Delivery',
      entities: [User],
      synchronize: true,
    }),

    UsersModule,
    AuthModule
  ],
  controllers: [],
  providers: [],
  
  exports: []
})
export class AppModule {}
