import 'dotenv/config'

import { ValidationPipe } from '@nestjs/common'
import { NestFactory } from '@nestjs/core'
import { FastifyAdapter, NestFastifyApplication } from '@nestjs/platform-fastify'
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger'

import helmet from '@fastify/helmet'

import { writeFileSync } from 'fs'
import { resolve } from 'path'

import { Environment } from '@/config/index.config'
import { AppModule } from '@/app.module'

async function bootstrap() {
  const app = await NestFactory.create<NestFastifyApplication>(AppModule, new FastifyAdapter())
  const port = Environment.PORT || 8080
  const host = '0.0.0.0'

  const config = new DocumentBuilder()
    .setTitle('NestJS API')
    .setDescription('Boilerplate base NestJS')
    .setVersion('11.0.2')
    .build()

  const document = SwaggerModule.createDocument(app, config)

  app.enableCors()
  app.useGlobalPipes(new ValidationPipe())
  app.register(helmet)

  SwaggerModule.setup('/', app, document, {
    jsonDocumentUrl: '/json'
  })

  writeFileSync(resolve('./', 'swagger.json'), JSON.stringify(document))

  await app.listen({ port, host }, () => console.log(`Aplicação disponível na porta: ${port} 🔥`))
}

bootstrap()
