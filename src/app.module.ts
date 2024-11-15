import { Module } from '@nestjs/common'

import { ControllerStarWars } from '@/controllers/index.controllers'
import { ModuleHttp, ModuleMongo, ModuleRedis, ModuleStarWars } from '@/modules/index.modules'

@Module({
  controllers: [ControllerStarWars],
  imports: [ModuleHttp, ModuleMongo, ModuleRedis, ModuleStarWars]
})
export class AppModule {}
