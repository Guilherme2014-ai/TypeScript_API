import { EntityRepository, Repository } from "typeorm";
import { ComplimentEntity } from "../entities/ComplimentEntity";

@EntityRepository(ComplimentEntity)
class ComplimentRepository extends Repository<ComplimentEntity> {}

export { ComplimentRepository };
