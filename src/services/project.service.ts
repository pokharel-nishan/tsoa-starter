import { CreateProject, Project } from '../types/project.types'

export class ProjectService {
  public get(id: number, name?: string): Project {
    return {
      id,
      description: 'first Project',
      name: name ?? 'HRM',
      status: 'Active',
      startDate: new Date('2024-12-31'),
      endDate: new Date('2025-12-31'),
    }
  }

  public create(projectCreationParams: CreateProject): Project {
    return {
      id: Math.floor(Math.random() * 10000),
      status: 'Active',
      ...projectCreationParams,
    }
  }
}
