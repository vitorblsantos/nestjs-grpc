import { BaseEntity, Column, Entity, ObjectId, ObjectIdColumn } from 'typeorm'

@Entity('peoples')
export class RepositoryPeoples extends BaseEntity {
  @ObjectIdColumn()
  _id: ObjectId

  @Column()
  birth_year: string

  @Column()
  created: string

  @Column()
  edited: string

  @Column()
  eye_color: string

  @Column('simple-array')
  films: string[]

  @Column()
  gender: string

  @Column()
  hair_color: string

  @Column()
  height: string

  @Column()
  homeworld: string

  @Column()
  mass: string

  @Column()
  name: string

  @Column()
  skin_color: string

  @Column('simple-array', { nullable: true })
  species?: string[]

  @Column('simple-array', { nullable: true })
  starships?: string[]

  @Column('simple-array', { nullable: true })
  vehicles?: string[]
}
