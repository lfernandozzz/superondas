# Plano de implementação — SuperOndas Telecom

## Escopo
Reconstruir o site institucional mobile-first da SuperOndas Telecom para conversão por WhatsApp, consulta de cobertura, suporte e confiança local. A primeira entrega será frontend funcional com dados tipados, rotas completas, recomendações de plano, verificador de cobertura e fallback de leads para WhatsApp. Integrações reais de backend, avaliações, GeoJSON definitivo, fotos e textos jurídicos permanecerão marcadas como `[CONFIRMAR]`.

## Abordagem técnica
- React 18 + TypeScript + Vite.
- React Router para páginas e rotas locais.
- Tailwind CSS com tokens CSS próprios e componentes acessíveis.
- React Hook Form + Zod para o contato e captura de demanda.
- Leaflet/OpenStreetMap preparado para cobertura, com fallback visual leve quando o mapa definitivo não estiver configurado.
- Dados de planos, cidades, FAQ, depoimentos e posts em `src/data`.
- WhatsApp centralizado em `src/lib/whatsapp.ts`, com origem, rota e plano em UTM e mensagem pré-preenchida.
- SEO por rota, JSON-LD, sitemap, robots e manifesto de rotas.
- Sem imagens genéricas: placeholders explícitos para fotos reais futuras.

## Estrutura
```text
src/
  components/       blocos visuais e interativos reutilizáveis
  data/             dados editáveis do negócio
  hooks/            consentimento, WhatsApp e estado de UI
  lib/              SEO, validação, URLs e utilitários
  pages/            páginas e rotas
  styles/           tokens e CSS global
public/             manifesto de rotas, sitemap, robots e assets mínimos
```

## Design

### Direções consideradas
1. **Costa editorial** (0,07): layout assimétrico, azul profundo, amarelo solar e tipografia editorial.
2. **Portal utilitário** (0,05): interface direta, densa e orientada a tarefas.
3. **Praça digital** (0,04): linguagem comunitária, blocos de informação e sinais locais.

Escolhida: **Costa editorial**.

- **Design movement:** editorial costeiro brasileiro, com energia de sinal e calor regional sem estética de template SaaS.
- **Princípios:** clareza antes de decoração; proximidade local; decisões guiadas por uso; confiança demonstrada por transparência.
- **Filosofia de cor:** o azul ancora a conexão e a segurança; a espuma cria leitura confortável; o amarelo é raro e indica ação, não enfeite.
- **Layout paradigm:** faixas horizontais e hero assimétrico, como uma linha de costa; evitar grades centralizadas repetitivas.
- **Assinaturas:** onda SVG no hero; marcador solar no logo; pequenas linhas de maré separando seções.
- **Interação:** cada controle responde com estado visível e linguagem de consequência; CTAs explicam o próximo passo.
- **Animação:** somente a onda do hero tem movimento contínuo; entradas e hovers são discretos; `prefers-reduced-motion` desliga transições.
- **Tipografia:** títulos editoriais com `Fraunces`/fallback serif; corpo em `DM Sans`/fallback sans-serif; escala responsiva e largura de linha limitada.
- **Essência:** fibra óptica próxima, clara e feita para a rotina real das cidades do interior do Maranhão. Personalidade: acolhedora, direta, confiável.
- **Voz:** ativa, curta e honesta. Exemplos: “Veja se a fibra já chegou até você.” / “Escolha pelo jeito que sua casa usa a internet.”
- **Wordmark:** nome em caixa mista com um traço de onda formando o “O” de Ondas e um ponto solar no terminal.
- **Cor proprietária:** amarelo sol `#FFB627` aplicado com parcimônia sobre o azul profundo.

## Wireframe da home
1. Status de manutenção opcional + header compacto.
2. Hero com headline, prova local, onda e verificador cidade + rua/bairro.
3. Faixa de confiança sem números inventados.
4. Recomendador de plano e três ofertas reais.
5. Cobertura por cidade + mapa preparado.
6. Avaliações mockadas identificadas como integração futura.
7. FAQ e suporte rápido.
8. CTA final para WhatsApp.
9. Footer com canais, endereço e links LGPD.

## Contratos de dados e pendências
- WhatsApp: `5598985068350`.
- Área do Cliente: `[CONFIRMAR: subdomínio HTTPS definitivo]`.
- Benefícios contratuais, instalação, fidelidade, taxa, modem/roteador e prazo: `[CONFIRMAR]`.
- Polígonos GeoJSON e cobertura por rua: `[CONFIRMAR]`.
- Avaliações reais e autorização de uso: `[CONFIRMAR]`.
- Textos jurídicos finais e responsável pelo tratamento LGPD: `[CONFIRMAR]`.
- GA4, Meta Pixel e IDs de medição: `[CONFIRMAR]`.
