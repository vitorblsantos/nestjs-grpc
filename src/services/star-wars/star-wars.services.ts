import { HttpService } from '@nestjs/axios'
import { Inject, Injectable } from '@nestjs/common'
import { InjectRepository } from '@nestjs/typeorm'

import { firstValueFrom } from 'rxjs'
import { Repository } from 'typeorm'
import { v4 as UUIDV4 } from 'uuid'

import { RepositoryPeoples } from '@/repositories/index.repositories'
import { IServiceStarWars, IStarWarsPeople } from '@/interfaces/index.interfaces'

@Injectable()
export class ServiceStarWars implements IServiceStarWars {
  constructor(
    @Inject(HttpService) private readonly http: HttpService,
    @InjectRepository(RepositoryPeoples) private repositoryStarWars: Repository<RepositoryPeoples>
  ) {}
  public async get(id: string): Promise<IStarWarsPeople> {
    const config = {
      headers: {
        'Content-Type': 'application/json'
      },
      method: 'GET',
      url: `https://swapi.dev/api/people/${id}/`
    }

    const response = await firstValueFrom(this.http.request(config))

    const data = {
      _id: UUIDV4(),
      ...response.data
    }

    await this.repositoryStarWars.save(data)

    return data
  }
}
