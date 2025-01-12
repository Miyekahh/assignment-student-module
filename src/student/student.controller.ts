import { Controller, Get, Post, Body, Param, Patch, Delete } from '@nestjs/common';
import { StudentService } from './student.service';
import { Student } from './entities/student.entities';

@Controller('students')
export class StudentController {
    constructor(private readonly studentService: StudentService) { }

    // Endpoint to create a student
    @Post()
    create(@Body() studentData: Partial<Student>): Promise<Student> {
        return this.studentService.create(studentData);
    }


}
