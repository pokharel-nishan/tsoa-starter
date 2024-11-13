export interface Project {
  id: number
  name: string
  description: string
  status?: 'Active' | 'Inactive'
  startDate: Date
  endDate: Date
}

export type CreateProject = Omit<Project, 'id'>
