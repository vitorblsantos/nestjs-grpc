import 'dotenv/config'

import { ValidationPipe } from '@nestjs/common'
import { NestFactory } from '@nestjs/core'
import { MicroserviceOptions, Transport } from '@nestjs/microservices'

import { join } from 'path'

import { Environment } from '@/config/index.config'
import { AppModule } from '@/app.module'

async function bootstrap() {
  const app = await NestFactory.createMicroservice<MicroserviceOptions>(AppModule, {
    transport: Transport.GRPC,
    options: {
      package: 'Peoples',
      protoPath: join(__dirname, './proto/peoples.proto'),
      url: `${Environment.HOST}:${Environment.PORT}`
    }
  })

  app.useGlobalPipes(new ValidationPipe())

  await app.listen()
}

bootstrap()
