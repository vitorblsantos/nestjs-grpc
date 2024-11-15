import { str, envsafe, port } from 'envsafe'

export const Environment = envsafe({
  APP_NAME: str({
    default: 'nestjs-api'
  }),
  MONGODB_DATABASE: str({
    allowEmpty: false
  }),
  MONGODB_HOST: str({
    allowEmpty: false
  }),
  MONGODB_PASSWORD: str({
    allowEmpty: false
  }),
  MONGODB_USER: str({
    allowEmpty: false
  }),
  NODE_ENV: str({
    devDefault: 'development',
    choices: ['development', 'production']
  }),
  PORT: port({
    devDefault: 8080,
    desc: 'The port the app is running on',
    example: 8080
  }),
  REDIS_HOST: str({
    allowEmpty: false
  }),
  REDIS_PASSWORD: str({
    allowEmpty: true
  }),
  REDIS_PORT: port({
    allowEmpty: false,
    devDefault: 6379,
    desc: 'The port the Redis Server is running on'
  })
})
