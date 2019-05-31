import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { BasketsController } from './baskets/baskets.controller';
import { BasketsService } from './baskets/baskets.service';
import { DatabaseModule } from './database/database.module';
import { databaseProviders } from './database/database.providers';
import { BasketsModule } from './baskets/baskets.module';

@Module({
  controllers: [AppController],
  providers: [AppService],
  imports: [BasketsModule],
})
export class AppModule {}
