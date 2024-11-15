import { Controller, Inject } from '@nestjs/common'

import { IStarWarsPeople } from '@/interfaces/index.interfaces'
import { ServiceStarWars } from '@/services/index.services'
import { GrpcMethod } from '@nestjs/microservices'

interface IGetPeoplesInput {
  id: string
}

@Controller('peoples')
export class ControllerStarWars {
  constructor(@Inject(ServiceStarWars) private readonly service: ServiceStarWars) {}

  @GrpcMethod('Peoples', 'getPeoples')
  async get(data: IGetPeoplesInput): Promise<IStarWarsPeople> {
    return await this.service.get(data.id)
  }
}
