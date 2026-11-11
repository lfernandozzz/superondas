import { Helmet } from 'react-helmet-async'
import type { ReactNode } from 'react'

const siteUrl = import.meta.env.VITE_PUBLIC_SITE_URL as string | undefined

export type SeoProps = {
  title: string
  description: string
  path?: string
  image?: string
  children?: ReactNode
}

export function Seo({ title, description, path = '/', image = '/og-superondas.svg', children }: SeoProps) {
  const canonical = siteUrl ? `${siteUrl.replace(/\/$/, '')}${path}` : undefined
  const imageUrl = siteUrl ? `${siteUrl.replace(/\/$/, '')}${image}` : image
  return (
    <Helmet>
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta property="og:type" content="website" />
      <meta property="og:site_name" content="SuperOndas Telecom" />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={imageUrl} />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      {canonical && <link rel="canonical" href={canonical} />}
      {canonical && <meta property="og:url" content={canonical} />}
      {children}
    </Helmet>
  )
}

export function LocalBusinessSchema() {
  const schema = {
    '@context': 'https://schema.org',
    '@type': ['LocalBusiness', 'InternetServiceProvider'],
    name: 'SuperOndas Telecom',
    url: siteUrl,
    email: 'contato@superondas.com.br',
    telephone: '+55 98 98506-8350',
    address: {
      '@type': 'PostalAddress',
      streetAddress: 'Rua do Sol, nº 27',
      addressLocality: 'Miranda do Norte',
      addressRegion: 'MA',
      addressCountry: 'BR',
    },
    areaServed: ['Miranda do Norte', 'Pirapemas', 'Arari', 'Cantanhede', 'Matões do Norte'],
    sameAs: ['https://instagram.com/superondas_telecom', 'https://facebook.com/superondas.telecom'],
  }
  return <script type="application/ld+json">{JSON.stringify(schema)}</script>
}

export function FAQSchema({ questions }: { questions: Array<{ question: string; answer: string }> }) {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: questions.map((item) => ({
      '@type': 'Question',
      name: item.question,
      acceptedAnswer: { '@type': 'Answer', text: item.answer },
    })),
  }
  return <script type="application/ld+json">{JSON.stringify(schema)}</script>
}
