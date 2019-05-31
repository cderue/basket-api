import { Sequelize } from 'sequelize-typescript';
import { Basket } from '../baskets/entities/basket.entity';

export const databaseProviders = [
    {
        provide: 'SequelizeToken',
        useFactory: async () => {
            const sequelize = new Sequelize({
              dialect: 'postgres',
              host: 'postgres-demo.postgres.database.azure.com',
              port: 5432,
              username: 'cderue@postgres-demo',
              password: 'adminRF1M0P.20',
              database: 'basket_db',
            });
            sequelize.addModels([Basket]);
            await sequelize.sync();
            return sequelize;
        },
    },
];