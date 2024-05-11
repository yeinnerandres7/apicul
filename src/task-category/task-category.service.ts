import { Injectable } from '@nestjs/common';
import { CreateTaskCategoryDto } from './dto/create-task-category.dto';
import { UpdateTaskCategoryDto } from './dto/update-task-category.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { TaskCategory } from './entities/task-category.entity';


@Injectable()
export class TaskCategoryService {
  constructor(
    @InjectRepository(TaskCategory) 
    private taskCategoryRepository: Repository<TaskCategory>
  ){}  

  create(createTaskCategoryDto: CreateTaskCategoryDto) {
    return this.taskCategoryRepository.save(createTaskCategoryDto);
  }

  findAll() {
    return this.taskCategoryRepository.find();
  }

  findOne(id: number) {
    return `This action returns a #${id} taskCategory`;
  }

  update(id: number, updateTaskCategoryDto: UpdateTaskCategoryDto) {
    return `This action updates a #${id} taskCategory`;
  }

  remove(id: number) {
    return `This action removes a #${id} taskCategory`;
  }
}
