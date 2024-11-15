import { CacheInterceptor } from '@nestjs/cache-manager'
import { Controller, Get, Inject, Param, UseInterceptors } from '@nestjs/common'
import { ApiParam, ApiResponse, ApiTags } from '@nestjs/swagger'

import { People } from '@/dto/index.dto'
import { IStarWarsPeople } from '@/interfaces/index.interfaces'
import { ServiceStarWars } from '@/services/index.services'

@ApiTags('Peoples')
@Controller('peoples')
export class ControllerStarWars {
  constructor(@Inject(ServiceStarWars) private readonly service: ServiceStarWars) {}

  @UseInterceptors(CacheInterceptor)
  @Get('/:id')
  @ApiParam({ name: 'id', type: String, description: 'id da entidade' })
  @ApiResponse({ status: 200, description: 'Retorna a entidade requisitada', type: People })
  @ApiResponse({ status: 404, description: 'Entidade não encontrada' })
  async get(@Param() param: { id: string }): Promise<IStarWarsPeople> {
    return await this.service.get(param.id)
  }
}
