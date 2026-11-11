# SuperOndas Telecom

Site institucional mobile-first da SuperOndas Telecom, provedor de internet de fibra óptica no interior do Maranhão. A experiência prioriza consulta de cobertura e contratação pelo WhatsApp, com páginas locais, planos claros e suporte rápido.

## Rodar localmente

Requisitos: Node 22+ e pnpm 11. O projeto fixa o gerenciador em `packageManager` e inclui `pnpm-lock.yaml`.

```bash
pnpm install
pnpm dev
pnpm typecheck
pnpm test
pnpm build
```

O Preview local escuta na porta 3000. A aplicação foi configurada para aceitar `0.0.0.0` no ambiente gerenciado.

## Variáveis de ambiente

Copie `.env.example` para `.env` e ajuste apenas os valores confirmados:

| Variável | Uso |
| --- | --- |
| `VITE_WHATSAPP_NUMBER` | Número internacional sem símbolos; padrão do projeto: `5598985068350`. |
| `VITE_CLIENT_AREA_URL` | URL HTTPS da Área do Cliente. |
| `VITE_PUBLIC_SITE_URL` | Domínio público usado em canonical e Open Graph. |
| `VITE_LEADS_ENDPOINT` | Endpoint opcional para `POST /api/leads`; vazio usa o fallback WhatsApp. |
| `VITE_GA4_ID` | ID do GA4, carregado somente após consentimento. |
| `VITE_META_PIXEL_ID` | Reservado para Meta Pixel, após consentimento e implementação aprovada. |
| `VITE_MAINTENANCE_MESSAGE` | Aviso editável exibido no topo quando preenchido. |

Nenhuma credencial de cliente é usada no frontend institucional.

## Onde editar conteúdo

Os planos, cidades, FAQs, depoimentos e posts ficam em `src/data/site.ts`. Componentes de conversão ficam em `src/components`. As páginas ficam em `src/pages`. O texto das páginas legais usa marcadores `[CONFIRMAR]` até a aprovação jurídica.

A lógica de WhatsApp e UTMs fica em `src/lib/whatsapp.ts`. Cada link informa origem, página e, quando aplicável, plano. O verificador de cobertura e o recomendador não afirmam cobertura por rua nem inventam benefícios; eles preparam a conversa para confirmação humana.

## Design tokens

Os tokens estão no início de `src/styles/globals.css` e são reaproveitados no Tailwind:

| Token | Valor | Papel |
| --- | --- | --- |
| `--deep` | `#0B2A3C` | Confiança, header e fundos densos. |
| `--wave` | `#1E7FA8` | Links, estados de ação e sinal de conexão. |
| `--foam` | `#EAF4F7` | Respiro e superfícies suaves. |
| `--sun` | `#FFB627` | CTA principal e assinatura solar. |
| `--ink` | `#12202A` | Texto principal. |
| `--success` / `--warning` / `--error` | estados contrastantes | Mensagens de confirmação, aviso e erro. |

A tipografia usa Fraunces para títulos e DM Sans para texto, com largura de leitura controlada. A onda visual do hero é o único movimento contínuo; `prefers-reduced-motion` reduz as transições.

## Deploy

### Vercel ou Netlify

Use o comando `pnpm install --frozen-lockfile && pnpm build` e publique `dist`. Configure as variáveis do `.env.example` no painel. O fallback de rotas SPA deve encaminhar todas as páginas para `index.html`, preservando os arquivos reservados `/sitemap.xml`, `/robots.txt` e `/manus-routes.json`.

### VPS com Nginx

Rode o build em uma etapa de CI, sirva `dist` com Nginx e habilite HTTPS. Use fallback SPA para rotas de páginas, mas não masque arquivos estáticos ausentes. Aplique CSP, HSTS, `X-Content-Type-Options: nosniff`, `Referrer-Policy` e proteção de frame compatível com o Preview embutido. Não use `X-Frame-Options: DENY` se o Preview gerenciado precisar embutir a aplicação.

## Lista `[CONFIRMAR]`

1. Subdomínio HTTPS definitivo da Área do Cliente.
2. Cobertura por rua/bairro e GeoJSON final das áreas atendidas.
3. Prazo e condições de instalação por cidade.
4. Fidelidade, taxas, equipamento fornecido e condições comerciais.
5. Benefícios contratuais oficiais que podem aparecer nos cards.
6. Depoimentos reais e autorização de uso; integração do Google Meu Negócio.
7. História, ano de fundação, missão, valores e fotos autorizadas da equipe/instalação.
8. Canal do encarregado LGPD, versão jurídica final e responsável pelo tratamento.
9. IDs de GA4 e Meta Pixel, além da política de medição aprovada.
10. Ferramenta oficial de teste de velocidade, se a empresa preferir uma indicação específica.
11. Fonte, responsável e mensagens do status de manutenção da rede.
12. Domínio canônico final e imagem OG hospedada nesse domínio.

## Checklist de lançamento

- [ ] Validar todos os itens `[CONFIRMAR]` e substituir os marcadores aprovados.
- [ ] Criar redirects 301 das URLs antigas do WordPress, incluindo correções de links quebrados.
- [ ] Configurar DNS, SSL, domínio canônico e e-mails.
- [ ] Configurar `VITE_PUBLIC_SITE_URL` e confirmar canonical, sitemap e robots no domínio final.
- [ ] Abrir propriedade no Google Search Console e enviar `sitemap.xml`.
- [ ] Revisar e atualizar o Google Meu Negócio com o link, telefone e cidades corretos.
- [ ] Conectar o endpoint de leads ou validar o fallback WhatsApp em todos os CTAs.
- [ ] Testar WhatsApp, formulário, cobertura, Área do Cliente e links de redes sociais.
- [ ] Testar em celular real de 360 px, 768 px e desktop de 1280 px, em rede móvel lenta.
- [ ] Rodar Lighthouse mobile; corrigir acessibilidade, SEO, performance e boas práticas antes de publicar.
- [ ] Validar consentimento: GA4/Meta não podem carregar antes do aceite.
- [ ] Confirmar headers HTTPS e políticas de segurança no ambiente de produção.

## Autocrítica de design

A base já evita o template genérico com hero assimétrico, onda/sol, tipografia editorial e placeholders honestos. O que ainda pode parecer provisório é a prova social mockada, a ausência de fotografia real e o mapa com pontos indicativos. A próxima melhoria deve substituir esses sinais por material real da SuperOndas, validar a cobertura por endereço e conectar avaliações autorizadas, sem adicionar selos ou números que não tenham sido confirmados.
