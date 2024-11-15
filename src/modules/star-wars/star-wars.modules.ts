import { Module } from '@nestjs/common'
import { TypeOrmModule } from '@nestjs/typeorm'

import { RepositoryPeoples } from '@/repositories/index.repositories'
import { ServiceStarWars } from '@/services/index.services'

@Module({
  imports: [TypeOrmModule.forFeature([RepositoryPeoples])],
  providers: [ServiceStarWars],
  exports: [ServiceStarWars]
})
export class ModuleStarWars {}
