import { Module } from '@nestjs/common';
import UsersRepository from './users.repository';
import { TypeOrmConfigModule } from '../config/typeorm/typeorm-config.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import User from '../entities/user.entity';

@Module({
    imports: [TypeOrmConfigModule, TypeOrmModule.forFeature([User])],
    providers: [UsersRepository],
    exports: [UsersRepository]
})
export default class RepositoriesModule {}
