import ztvVideoFactory from './ztvVideoFactory.ts'
import ztvVideoPipeline from './ztvVideoPipeline.ts'
import tavernMeet from './tavernMeet.ts'
import englishJeopardy from './englishJeopardy.ts'

export type Project = {
  title: string
  slug: string
  summary: string
  role: string
  tech: string[]
  highlights: string[]
  writeup: string
  lessonsLearned: string[]
}

export const projects: Project[] = [
  ztvVideoFactory,
  tavernMeet,
  ztvVideoPipeline,
  englishJeopardy,
]