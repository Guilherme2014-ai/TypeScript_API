import { EntityRepository, Repository } from "typeorm";
import { UserEntity } from "../entities/UserEntity";

@EntityRepository(UserEntity)
class UsersRepository extends Repository<UserEntity> {}

export { UsersRepository };
