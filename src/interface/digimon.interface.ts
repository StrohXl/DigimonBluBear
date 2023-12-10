export interface Digimon {
  id: number
  name: string
  xAntibody: boolean
  images: imageDigimon[]
  levels: levelDigimon[]
  types: typeDigimon[]
  attributes: attributeDigimon[]
  fields: fieldDigimon[]
  releaseDate: string
  descriptions: descriptionDigimon[]
  skills: skillDigimon[]
  priorEvolutions: priorEvolutionDigimon[]
  nextEvolutions: nextEvolutionDigimon[]
}
export interface Digimons {
  id: number
  name: string
  image: string
}

interface imageDigimon {
  href: string
  transparent: boolean
}
interface levelDigimon {
  id: number
  level: string
}
interface attributeDigimon {
  id: number
  attribute: string
}
interface fieldDigimon {
  id: number
  field: string
  image: string
}
interface descriptionDigimon {
  origin: string
  language: string
  description: string
}
interface skillDigimon {
  id: number
  skill: string
  translation: string
  description: string
}
interface priorEvolutionDigimon {
  id: number
  digimon: string
  condition: string
  image: string
  url: string
}
interface nextEvolutionDigimon {
  id: number
  digimon: string
  condition: string
  image: string
  url: string
}
interface typeDigimon {
  id: number
  type: string
}
