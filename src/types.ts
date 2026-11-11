export type PlanId = 'streaming' | 'gamers' | 'homepro'

export type Plan = {
  id: PlanId
  name: string
  speed: number
  price: number
  eyebrow: string
  description: string
  highlights: string[]
  recommendedFor: string
  accent: 'wave' | 'sun' | 'deep'
}

export type City = {
  slug: string
  name: string
  state: string
  shortDescription: string
  localLine: string
  status: 'atendida' | 'em expansão'
  coordinates: [number, number]
}

export type FAQItem = {
  question: string
  answer: string
}

export type Testimonial = {
  quote: string
  name: string
  city: string
  source: string
}

export type BlogPost = {
  slug: string
  category: string
  title: string
  excerpt: string
  readTime: string
  date: string
}
