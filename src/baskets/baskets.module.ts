import { Module } from '@nestjs/common';
import { BasketsController } from './baskets.controller';
import { DatabaseModule } from '../database/database.module';
import { BasketsService } from './baskets.service';
import { basketsProviders } from './baskets.providers';

@Module({

  imports: [DatabaseModule],

  controllers: [BasketsController],

  providers: [BasketsService, ...basketsProviders ],

})

export class BasketsModule {}