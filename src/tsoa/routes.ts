/* tslint:disable */
/* eslint-disable */
// WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
import type { TsoaRoute } from '@tsoa/runtime'
import { fetchMiddlewares, ExpressTemplateService } from '@tsoa/runtime'
// WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
import { ProjectsController } from './../controllers/project.controller'
import type { Request as ExRequest, Response as ExResponse, RequestHandler, Router } from 'express'

// WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa

const models: TsoaRoute.Models = {
  Project: {
    dataType: 'refObject',
    properties: {
      id: { dataType: 'double', required: true },
      name: { dataType: 'string', required: true },
      description: { dataType: 'string', required: true },
      status: {
        dataType: 'union',
        subSchemas: [
          { dataType: 'enum', enums: ['Active'] },
          { dataType: 'enum', enums: ['Inactive'] },
        ],
      },
      startDate: { dataType: 'datetime', required: true },
      endDate: { dataType: 'datetime', required: true },
    },
    additionalProperties: false,
  },
  // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
  'Pick_Project.Exclude_keyofProject.id__': {
    dataType: 'refAlias',
    type: {
      dataType: 'nestedObjectLiteral',
      nestedProperties: {
        name: { dataType: 'string', required: true },
        description: { dataType: 'string', required: true },
        status: {
          dataType: 'union',
          subSchemas: [
            { dataType: 'enum', enums: ['Active'] },
            { dataType: 'enum', enums: ['Inactive'] },
          ],
        },
        startDate: { dataType: 'datetime', required: true },
        endDate: { dataType: 'datetime', required: true },
      },
      validators: {},
    },
  },
  // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
  'Omit_Project.id_': {
    dataType: 'refAlias',
    type: { ref: 'Pick_Project.Exclude_keyofProject.id__', validators: {} },
  },
  // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
  CreateProject: {
    dataType: 'refAlias',
    type: { ref: 'Omit_Project.id_', validators: {} },
  },
  // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
}
const templateService = new ExpressTemplateService(models, {
  noImplicitAdditionalProperties: 'throw-on-extras',
  bodyCoercion: true,
})

// WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa

export function RegisterRoutes(app: Router) {
  // ###########################################################################################################
  //  NOTE: If you do not see routes for all of your controllers in this file, then you might not have informed tsoa of where to look
  //      Please look into the "controllerPathGlobs" config option described in the readme: https://github.com/lukeautry/tsoa
  // ###########################################################################################################

  app.get(
    '/projects/:projectId',
    ...fetchMiddlewares<RequestHandler>(ProjectsController),
    ...fetchMiddlewares<RequestHandler>(ProjectsController.prototype.getProject),

    async function ProjectsController_getProject(request: ExRequest, response: ExResponse, next: any) {
      const args: Record<string, TsoaRoute.ParameterSchema> = {
        projectId: { in: 'path', name: 'projectId', required: true, dataType: 'double' },
        name: { in: 'query', name: 'name', dataType: 'string' },
      }

      // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa

      let validatedArgs: any[] = []
      try {
        validatedArgs = templateService.getValidatedArgs({ args, request, response })

        const controller = new ProjectsController()

        await templateService.apiHandler({
          methodName: 'getProject',
          controller,
          response,
          next,
          validatedArgs,
          successStatus: undefined,
        })
      } catch (err) {
        return next(err)
      }
    },
  )
  // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
  app.post(
    '/projects',
    ...fetchMiddlewares<RequestHandler>(ProjectsController),
    ...fetchMiddlewares<RequestHandler>(ProjectsController.prototype.createProject),

    async function ProjectsController_createProject(request: ExRequest, response: ExResponse, next: any) {
      const args: Record<string, TsoaRoute.ParameterSchema> = {
        requestBody: { in: 'body', name: 'requestBody', required: true, ref: 'CreateProject' },
      }

      // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa

      let validatedArgs: any[] = []
      try {
        validatedArgs = templateService.getValidatedArgs({ args, request, response })

        const controller = new ProjectsController()

        await templateService.apiHandler({
          methodName: 'createProject',
          controller,
          response,
          next,
          validatedArgs,
          successStatus: 201,
        })
      } catch (err) {
        return next(err)
      }
    },
  )
  // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa

  // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa

  // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
}

// WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
