import { CacheModule } from '@nestjs/cache-manager'
import { Module } from '@nestjs/common'

import * as redisStore from 'cache-manager-redis-store'

import { Environment } from '@/config/index.config'

@Module({
  imports: [
    CacheModule.register({
      isGlobal: true,
      store: redisStore,
      host: Environment.REDIS_HOST,
      port: Environment.REDIS_PORT,
      password: Environment.REDIS_PASSWORD
    })
  ]
})
export class ModuleRedis {}
