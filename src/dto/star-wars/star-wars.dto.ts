import { ApiProperty, PartialType } from '@nestjs/swagger'
import { IsDefined, IsNotEmpty, IsString } from 'class-validator'

export class People {
  @ApiProperty({
    description: 'Propriedade birth_year',
    example: '19BBY',
    format: 'binary',
    pattern: '[0-9BBY]'
  })
  @IsDefined()
  @IsNotEmpty()
  @IsString()
  birth_year!: string

  @ApiProperty({
    description: 'Propriedade created',
    example: '2014-12-09T13:50:51.644000Z'
  })
  @IsDefined()
  @IsNotEmpty()
  @IsString()
  created!: string

  @ApiProperty({
    description: 'Propriedade edited',
    example: '2014-12-20T21:17:56.891000Z'
  })
  @IsDefined()
  @IsNotEmpty()
  @IsString()
  edited!: string

  @ApiProperty({
    description: 'Propriedade eye_color',
    example: 'blue',
    format: 'binary',
    pattern: '[a-zA-Z]'
  })
  @IsDefined()
  @IsNotEmpty()
  @IsString()
  eye_color!: string

  @ApiProperty({
    description: 'Propriedade films',
    example: [
      'https://swapi.dev/api/films/1/',
      'https://swapi.dev/api/films/2/',
      'https://swapi.dev/api/films/3/',
      'https://swapi.dev/api/films/6/'
    ],
    isArray: true
  })
  @IsDefined()
  @IsNotEmpty()
  films!: string[]

  @ApiProperty({
    description: 'Propriedade gender',
    example: 'male',
    format: 'binary',
    pattern: '[a-zA-Z]'
  })
  @IsDefined()
  @IsNotEmpty()
  @IsString()
  gender!: string

  @ApiProperty({
    description: 'Propriedade hair_color',
    example: 'blond',
    format: 'binary',
    pattern: '[a-zA-Z]'
  })
  @IsDefined()
  @IsNotEmpty()
  @IsString()
  hair_color!: string

  @ApiProperty({
    description: 'Propriedade height',
    example: '172',
    format: 'binary',
    pattern: '\\d'
  })
  @IsDefined()
  @IsNotEmpty()
  @IsString()
  height!: string

  @ApiProperty({
    description: 'Propriedade homeworld',
    example: 'https://swapi.dev/api/planets/1/'
  })
  @IsDefined()
  @IsNotEmpty()
  @IsString()
  homeworld!: string

  @ApiProperty({
    description: 'Propriedade mass',
    example: '77',
    format: 'binary',
    pattern: '\\d'
  })
  @IsDefined()
  @IsNotEmpty()
  @IsString()
  mass!: string

  @ApiProperty({
    description: 'Propriedade name',
    example: 'Luke Skywalker',
    format: 'binary',
    pattern: '[a-zA-Z0-9]'
  })
  @IsDefined()
  @IsNotEmpty()
  @IsString()
  name!: string

  @ApiProperty({
    description: 'Propriedade skin_color',
    example: 'fair',
    format: 'binary',
    pattern: '[a-zA-Z]'
  })
  @IsDefined()
  @IsNotEmpty()
  @IsString()
  skin_color!: string

  @ApiProperty({
    description: 'Propriedade species',
    example: [],
    isArray: true
  })
  @IsDefined()
  @IsNotEmpty()
  species!: string[]

  @ApiProperty({
    description: 'Propriedade starships',
    example: ['https://swapi.dev/api/starships/12/', 'https://swapi.dev/api/starships/22/'],
    isArray: true
  })
  @IsDefined()
  @IsNotEmpty()
  starships!: string[]

  @ApiProperty({
    description: 'Propriedade url',
    example: 'https://swapi.dev/api/people/1/'
  })
  @IsDefined()
  @IsNotEmpty()
  @IsString()
  url!: string

  @ApiProperty({
    description: 'Propriedade vehicles',
    example: ['https://swapi.dev/api/vehicles/14/', 'https://swapi.dev/api/vehicles/30/'],
    isArray: true
  })
  @IsDefined()
  @IsNotEmpty()
  vehicles!: string[]
}

export class CreatePeople extends PartialType(People) {}
