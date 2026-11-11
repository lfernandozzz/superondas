import type { BlogPost, City, FAQItem, Plan, Testimonial } from '../types'

export const plans: Plan[] = [
  {
    id: 'streaming',
    name: 'Super Streaming',
    speed: 500,
    price: 99.9,
    eyebrow: 'Para a casa conectada',
    description: 'Para filmes, séries, redes sociais, videochamadas e a rotina da família.',
    highlights: ['500 Mega de velocidade', 'Fibra óptica', 'Atendimento pelo WhatsApp'],
    recommendedFor: '2 a 4 pessoas, uso diário e entretenimento',
    accent: 'wave',
  },
  {
    id: 'gamers',
    name: 'Super Gamers',
    speed: 600,
    price: 119.9,
    eyebrow: 'Para jogar e criar',
    description: 'Mais fôlego para partidas, downloads, lives e várias telas ao mesmo tempo.',
    highlights: ['600 Mega de velocidade', 'Fibra óptica', 'Atendimento pelo WhatsApp'],
    recommendedFor: '3 a 5 pessoas, jogos e uso intenso',
    accent: 'sun',
  },
  {
    id: 'homepro',
    name: 'Super HomePro',
    speed: 700,
    price: 139.9,
    eyebrow: 'Para uma casa que não para',
    description: 'Para famílias maiores, trabalho remoto, estudos e muitos dispositivos ligados.',
    highlights: ['700 Mega de velocidade', 'Fibra óptica', 'Atendimento pelo WhatsApp'],
    recommendedFor: '5+ pessoas, home office e muitos dispositivos',
    accent: 'deep',
  },
]

export const cities: City[] = [
  {
    slug: 'miranda-do-norte',
    name: 'Miranda do Norte',
    state: 'MA',
    shortDescription: 'Conexão de fibra para a rotina de casas e negócios locais.',
    localLine: 'A cidade onde a SuperOndas começou.',
    status: 'atendida',
    coordinates: [-3.5637, -44.5807],
  },
  {
    slug: 'pirapemas',
    name: 'Pirapemas',
    state: 'MA',
    shortDescription: 'Internet para estudar, trabalhar, jogar e falar com quem está longe.',
    localLine: 'Mais perto do que parece.',
    status: 'atendida',
    coordinates: [-3.7286, -44.2211],
  },
  {
    slug: 'arari',
    name: 'Arari',
    state: 'MA',
    shortDescription: 'Fibra óptica para deixar o dia a dia mais leve e previsível.',
    localLine: 'Conexão que acompanha o ritmo da cidade.',
    status: 'atendida',
    coordinates: [-3.4531, -44.7796],
  },
  {
    slug: 'cantanhede',
    name: 'Cantanhede',
    state: 'MA',
    shortDescription: 'Uma conexão simples de contratar e feita para a vida real.',
    localLine: 'A sua rotina merece uma rede que acompanha.',
    status: 'atendida',
    coordinates: [-3.6333, -44.3767],
  },
  {
    slug: 'matoes-do-norte',
    name: 'Matões do Norte',
    state: 'MA',
    shortDescription: 'Internet de fibra para sua casa, seu trabalho e seus planos.',
    localLine: 'A onda chegou para ficar perto.',
    status: 'atendida',
    coordinates: [-3.6284, -44.5539],
  },
]

export const faqs: FAQItem[] = [
  {
    question: 'Como consulto se a SuperOndas atende meu endereço?',
    answer: 'Escolha sua cidade e informe sua rua ou bairro no verificador. O WhatsApp abre com os dados preenchidos para a equipe confirmar a cobertura do endereço.',
  },
  {
    question: 'A internet é de fibra óptica?',
    answer: 'Sim. Os planos apresentados nesta página são planos de fibra óptica. A disponibilidade final depende do endereço informado.',
  },
  {
    question: 'Qual plano combina com a minha casa?',
    answer: 'Use o recomendador pelo número de pessoas e pelo tipo de uso. Ele indica um ponto de partida; a equipe pode ajudar a confirmar a melhor escolha pelo WhatsApp.',
  },
  {
    question: 'Como peço a segunda via ou atendimento?',
    answer: 'O caminho mais rápido é falar pelo WhatsApp. Na página de Suporte você também encontra o acesso à Área do Cliente, configurável pela empresa.',
  },
  {
    question: 'Quanto tempo leva a instalação?',
    answer: '[CONFIRMAR: prazo real de instalação por cidade e endereço]. A equipe confirma as condições e o próximo passo diretamente pelo WhatsApp.',
  },
]

export const testimonials: Testimonial[] = [
  {
    quote: '[CONFIRMAR: depoimento real de cliente sobre estabilidade e atendimento].',
    name: 'Depoimento a substituir',
    city: 'Miranda do Norte/MA',
    source: 'Estrutura para integração com Google Meu Negócio',
  },
  {
    quote: '[CONFIRMAR: depoimento real de cliente sobre contratação ou suporte].',
    name: 'Depoimento a substituir',
    city: 'Cantanhede/MA',
    source: 'Estrutura para integração com Google Meu Negócio',
  },
]

export const posts: BlogPost[] = [
  {
    slug: 'como-melhorar-o-wi-fi-em-casa',
    category: 'Wi-Fi',
    title: 'Como melhorar o sinal do Wi-Fi dentro de casa',
    excerpt: 'Posição do roteador, obstáculos e hábitos simples que ajudam a aproveitar melhor sua conexão.',
    readTime: '4 min',
    date: 'Conteúdo evergreen',
  },
  {
    slug: 'teste-de-velocidade-sem-complicacao',
    category: 'Conexão',
    title: 'Teste de velocidade: o que observar sem complicação',
    excerpt: 'Entenda download, upload e o que vale conferir antes de pedir ajuda ao suporte.',
    readTime: '3 min',
    date: 'Conteúdo evergreen',
  },
  {
    slug: 'cuidados-basicos-na-internet',
    category: 'Segurança',
    title: 'Cuidados básicos para navegar com mais segurança',
    excerpt: 'Senhas fortes, golpes comuns e pequenos cuidados para proteger sua família online.',
    readTime: '5 min',
    date: 'Conteúdo evergreen',
  },
]
