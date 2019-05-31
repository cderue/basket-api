import { Injectable, Inject } from '@nestjs/common';
import { Basket } from './entities/basket.entity';
import { UpdateBasketDto } from './dto/update-basket.dto';
import { CreateBasketDto } from './dto/create-basket.dto';

@Injectable()
export class BasketsService {
    constructor(
        @Inject('BasketsRepository') private readonly basketsRepository: typeof Basket,
    ) { }

    async create(createBasketDto: CreateBasketDto): Promise<Basket> {
        return await this.basketsRepository.create<Basket>(createBasketDto);
    }

    async findById(id: number): Promise<Basket> {
        return await this.basketsRepository.findByPk(id);
    }

    async update(id: number, updateBasketDto: UpdateBasketDto): Promise<Basket | null> {
        let basket = await this.basketsRepository.findByPk<Basket>(id);

        if (!basket.id) {
    
          // tslint:disable-next-line:no-console
          console.error('basket doesn\'t exist');
    
        }
    
        //basket = this._assign(basket, updateBasketDto);
    
        return await basket.save({ returning: true });
    }

    async remove(id: number) {
        return await this.basketsRepository.destroy({

            where: { id },
      
          });
    }
}