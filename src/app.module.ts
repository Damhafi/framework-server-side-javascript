import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersModule } from './users/users.module';

@Module({
  imports: [UsersModule, MongooseModule.forRoot('mongodb+srv://yusufmilla:Caralho38@cluster0.6ywkq.mongodb.net/back-end-db')],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
