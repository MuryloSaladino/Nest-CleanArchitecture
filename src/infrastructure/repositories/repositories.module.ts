import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UsersRepository } from './users.repository';
import { UserEntity } from '../entities/user.entity';
import { TypeOrmConfigModule } from '../config/typeorm/typeorm.module';

@Module({
    imports: [
        TypeOrmConfigModule, 
        TypeOrmModule.forFeature([UserEntity])
    ],
    providers: [
        UsersRepository, 
    ],
    exports: [
        UsersRepository, 
    ]
})
export class RepositoriesModule {}
