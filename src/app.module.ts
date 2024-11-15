import { Module } from '@nestjs/common'

import { ControllerStarWars } from '@/controllers/index.controllers'
import { ModuleHttp, ModuleMongo, ModuleStarWars } from '@/modules/index.modules'

@Module({
  controllers: [ControllerStarWars],
  imports: [ModuleHttp, ModuleMongo, ModuleStarWars]
})
export class AppModule {}
