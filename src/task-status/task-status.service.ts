import { Injectable } from '@nestjs/common';
import { CreateTaskStatusDto } from './dto/create-task-status.dto';
import { UpdateTaskStatusDto } from './dto/update-task-status.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { TaskStatus } from './entities/task-status.entity';
import { Repository } from 'typeorm';

@Injectable()
export class TaskStatusService {
  constructor(
    @InjectRepository(TaskStatus) 
    private taskstatusRepository: Repository<TaskStatus>
  ){}  

  create(createTaskStatusDto: CreateTaskStatusDto) {
    return this.taskstatusRepository.save(createTaskStatusDto);
  }
  
  findAll() {
    return this.taskstatusRepository.find();
  }

  findOne(id: number) {
    return `This action returns a #${id} taskStatus`;
  }

  update(id: number, updateTaskStatusDto: UpdateTaskStatusDto) {
    return `This action updates a #${id} taskStatus`;
  }

  remove(id: number) {
    return `This action removes a #${id} taskStatus`;
  }
}
