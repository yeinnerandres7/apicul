import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { TaskCategoryService } from './task-category.service';
import { CreateTaskCategoryDto } from './dto/create-task-category.dto';
import { UpdateTaskCategoryDto } from './dto/update-task-category.dto';

@Controller('task-category')
export class TaskCategoryController {
  constructor(private readonly taskCategoryService: TaskCategoryService) {}

  @Post()
  create(@Body() createTaskCategoryDto: CreateTaskCategoryDto) {
    return this.taskCategoryService.create(createTaskCategoryDto);
  }

  @Get()
  findAll() {
    return this.taskCategoryService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.taskCategoryService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateTaskCategoryDto: UpdateTaskCategoryDto) {
    return this.taskCategoryService.update(+id, updateTaskCategoryDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.taskCategoryService.remove(+id);
  }
}
