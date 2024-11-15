import { str, envsafe, port } from 'envsafe'

export const Environment = envsafe({
  APP_NAME: str({
    default: 'nestjs-grpc'
  }),
  HOST: str({
    devDefault: '0.0.0.0',
    desc: 'Host that the app is running on',
    example: '0.0.0.0'
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
    devDefault: 3019,
    desc: 'Port that the app is running on',
    example: 3019
  })
})
