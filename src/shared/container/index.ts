import { container } from 'tsyringe';

import { UsersRepository } from '@modules/accounts/infra/repositories/UsersRepository';
import { IUsersRepository } from '@modules/accounts/Repositories/IUsersRepository';
import { CarsImagesRepository } from '@modules/cars/infra/repositories/CarImagesRepository';
import { CarsRepository } from '@modules/cars/infra/repositories/CarsRepository';
import { CategoriesRepository } from '@modules/cars/infra/repositories/CategoriesRepository';
import { ICarsRepository } from '@modules/cars/infra/repositories/in-memory/ICarsRepository';
import { SpecificationsRepository } from '@modules/cars/infra/repositories/SpecificationsRepository';
import { ICarsImagesRepository } from '@modules/cars/Repositories/ICarsImagesRepository';
import { ICategoriesRepository } from '@modules/cars/Repositories/ICategoriesRepository';
import { ISpecificationsRepository } from '@modules/cars/Repositories/ISpecificationsRepository';

// ICategoriesRepository
container.registerSingleton<ICategoriesRepository>(
  'CategoriesRepository',
  CategoriesRepository,
);

container.registerSingleton<ISpecificationsRepository>(
  'SpecificationsRepository',
  SpecificationsRepository,
);

container.registerSingleton<IUsersRepository>(
  'UsersRepository',
  UsersRepository,
);

container.registerSingleton<ICarsRepository>('CarsRepository', CarsRepository);

container.registerSingleton<ICarsImagesRepository>(
  'CarsImagesRepository',
  CarsImagesRepository,
);
