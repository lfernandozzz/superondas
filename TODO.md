# TODO — SuperOndas Telecom

## Base técnica, identidade e qualidade
- [ ] Criar aplicação React 18 + TypeScript + Vite com estrutura em `components`, `pages`, `data`, `hooks`, `lib` e `styles`.
- [ ] Aplicar tokens CSS para `#0B2A3C`, `#1E7FA8`, `#EAF4F7`, `#FFB627`, `#12202A` e estados acessíveis com contraste WCAG AA.
- [ ] Implementar tipografia distinta para títulos e corpo, escala responsiva, largura de leitura de até 80 caracteres e suporte a `prefers-reduced-motion`.
- [ ] Garantir navegação por teclado, foco visível, labels, alt text, sem `any`, componentes pequenos e lógica fora do JSX.

## Conversão e dados
- [ ] Implementar dados tipados para planos, cidades, FAQs, depoimentos e posts em `src/data`.
- [ ] Exibir os planos reais: Super Streaming 500 Mega por R$ 99,90/mês; Super Gamers 600 Mega por R$ 119,90/mês; Super HomePro 700 Mega por R$ 139,90/mês.
- [ ] Implementar recomendador por número de pessoas e tipo de uso, mostrando o plano recomendado e CTA correspondente.
- [ ] Implementar verificador de cobertura com cidade e rua/bairro, lista de cidades e fallback “minha cidade não aparece”.
- [ ] Implementar links WhatsApp com mensagem contextual e UTM de origem, página e plano, usando 5598985068350.
- [ ] Implementar botão flutuante de WhatsApp em todas as páginas, com a página atual na mensagem.
- [ ] Deixar interface pronta para POST `/api/leads`, com fallback para WhatsApp quando o backend não estiver configurado.
- [ ] Implementar banner de manutenção/status editável sem inventar disponibilidade.
- [ ] Preparar Área do Cliente por variável de ambiente HTTPS, sem login institucional ou dados sensíveis no frontend.

## Páginas e SEO
- [ ] Criar Home, Planos, Cobertura, Suporte, Empresa, Blog, Contato, Privacidade e Termos.
- [ ] Criar páginas dinâmicas `/internet-em/arari`, `/internet-em/cantanhede`, `/internet-em/matoes-do-norte`, `/internet-em/miranda-do-norte` e `/internet-em/pirapemas`.
- [ ] Criar metadados únicos, canonical, Open Graph, JSON-LD LocalBusiness/ISP, FAQPage e Offer.
- [ ] Criar `public/manus-routes.json`, `sitemap.xml` e `robots.txt`.
- [ ] Remover posts antigos fora do tema e qualquer texto de template.

## Segurança, consentimento e analytics
- [ ] Implementar consentimento de cookies e carregar GA4/Meta Pixel somente após consentimento.
- [ ] Incluir honeypot/validação Zod em formulários e consentimento LGPD explícito.
- [ ] Documentar CSP, HSTS, X-Content-Type-Options e HTTPS no README/deploy.
- [ ] Listar todos os `[CONFIRMAR]` e pendências de lançamento.

## Documentação e entrega
- [ ] Criar README, `.env.example`, tokens documentados e instruções Vercel/Netlify/VPS Nginx.
- [ ] Incluir checklist: redirects 301 das URLs WordPress, DNS, SSL, Search Console, Google Meu Negócio e testes em celular real.
- [ ] Rodar diagnósticos TypeScript, build, testes críticos e checagem do manifesto de rotas.
- [ ] Fazer autocrítica visual apontando o que ainda parece genérico e melhorias futuras.
