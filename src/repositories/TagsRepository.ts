import { EntityRepository, Repository } from "typeorm";
import { TagEntity } from "../entities/TagEntity";

@EntityRepository(TagEntity)
class TagsRepository extends Repository<TagEntity> {}

export { TagsRepository };
