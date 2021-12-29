import { getCustomRepository } from "typeorm";
import { TagsRepository } from "../repositories/TagsRepository";

import Error_Status from "../factory/Error_Status";
import ITagRequest from "../interfaces/ITagRequest";

class CreateTagService {
	async execute(tagRequest: ITagRequest) {
		try {
			const _TagRepository = getCustomRepository(TagsRepository);
			const { name } = tagRequest;

			if (!name) throw new Error_Status("Name must be Valid !", 400);

			const tagAlreadyExists = await _TagRepository.findOne({ name });

			if (tagAlreadyExists)
				throw new Error_Status("Tag already Registred !", 406);

			const tag = await _TagRepository.create(tagRequest);
			_TagRepository.save(tag);

			return tag;
		} catch (e) {
			throw e;
		}
	}
}

export default CreateTagService;
