export type Mentee = {
    id: string
    name: string
    email: string
    age: number
    location: string
    time: string
    avatar: string
    goal: string
    careerPath: string
    interests: string[]
    socials: {
      twitter?: string
      linkedin?: string
    }
  }