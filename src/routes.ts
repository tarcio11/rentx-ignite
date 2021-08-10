import { Request, Response } from 'express'
import CreateCourseService from './CreateCourseService'

export function createCourser(request: Request, response: Response) {
  CreateCourseService.execute({
    name: 'NodeJS',
    educator: 'Tarcio',
    duration: 10
  })

  return response.send()
}
