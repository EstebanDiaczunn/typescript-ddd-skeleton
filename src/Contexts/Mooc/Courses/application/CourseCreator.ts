import { Course } from '../domain/Course';
import { CourseRepository } from '../domain/CourseRepository';

export class CourseCreator {
	private readonly repository: CourseRepository;

	constructor(repository: CourseRepository) {
		this.repository = repository;
	}

	async run(id: string, name: string, duration: string): Promise<void> {
		await this.repository.save(new Course({ id, name, duration }));
	}
}
