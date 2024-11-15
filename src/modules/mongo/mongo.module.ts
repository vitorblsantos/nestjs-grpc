import { Module } from '@nestjs/common'
import { Environment } from '@/config/index.config'
import { TypeOrmModule } from '@nestjs/typeorm'
import { getMetadataArgsStorage } from 'typeorm'

@Module({
  imports: [
    TypeOrmModule.forRootAsync({
      useFactory: async () => {
        const entities = getMetadataArgsStorage()
          .tables.map(tbl => tbl.target)
          .filter(entity => entity.toString().toLowerCase().includes('entity'))

        return {
          type: 'mongodb',
          url: `mongodb+srv://${Environment.MONGODB_USER}:${Environment.MONGODB_PASSWORD}@${Environment.MONGODB_HOST}/?retryWrites=true&w=majority&appName=${Environment.APP_NAME}`,
          database: Environment.MONGODB_DATABASE,
          entities,
          logging: true,
          autoLoadEntities: true
        }
      }
    })
  ],
  exports: [TypeOrmModule]
})
export class ModuleMongo {}
