import { ProjectService } from '../services/project.service'
import { Body, Controller, Get, Query, Path, Post, Route, SuccessResponse } from '@tsoa/runtime'

import { CreateProject, Project } from '../types/project.types'

@Route('projects')
export class ProjectsController extends Controller {
  @Get('{projectId}')
  public async getProject(@Path() projectId: number, @Query() name?: string): Promise<Project> {
    return new ProjectService().get(projectId, name)
  }

  @Post()
  @SuccessResponse('201', 'Created')
  public async createProject(@Body() requestBody: CreateProject): Promise<void> {
    this.setStatus(201)
    new ProjectService().create(requestBody)
    return
  }
}
