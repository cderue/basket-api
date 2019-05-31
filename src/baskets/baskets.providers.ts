import { Basket } from './entities/basket.entity';

export const basketsProviders = [
    {
        provide: 'BasketsRepository',
        useValue: Basket,
    },
];