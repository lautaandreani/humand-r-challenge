export interface Origin {
  name: string
  url: string
}

export interface Location {
  name: string
  url: string
}

export interface Character {
  id: number
  name: string
  status: Status
  species: string
  type: string
  gender: string
  origin: Origin
  location: Location
  image: string
  episode: string[]
  url: string
  created: string
}

export enum Status {
  Alive = 'Alive',
  Dead = 'Dead',
  Unknown = 'unknown'
}