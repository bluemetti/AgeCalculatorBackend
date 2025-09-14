Roteiro para vídeo: Calculadora de Idade (≈ 2 minutos)

1) Intro (10s)
- "Olá — este é meu projeto Age Calculator, feito com React, TypeScript, Vite e Tailwind. Vou mostrar rapidamente a aplicação, o código e como eu implementei uma página adicional que reaproveita o mesmo formulário para calcular o tempo até um evento futuro."

2) Mostrar a aplicação e explicar rapidamente (25s)
- Abra a aplicação e mostre os campos Day / Month / Year.
- Diga: "A validação é feita com Zod + react-hook-form; erros aparecem inline." Mostre um exemplo rápido de erro.
- Código a destacar: **`src/validation.ts`** (mostre a definição do schema) e **`src/components/InputGroup.tsx`** (mostre como os inputs são registrados com `register`).

3) Responder a pergunta obrigatória — passos para adicionar a nova aba/página reutilizando o formulário (60-70s)
- Falar a pergunta em voz: "Digamos que queremos adicionar uma aba de navegação... Como reaproveitar o mesmo componente de formulário para uma nova página onde o usuário digita a data de um evento futuro?"
- Resposta — listar e explicar os passos (mostre trechos de código enquanto fala):
	1. Adicionar roteamento / navegação: crie uma rota `/event` e links no topo. (Arquivo: **`src/main.tsx`** e **`src/App.tsx`** — mostre as linhas onde `createBrowserRouter` e `<Link to="/event">` aparecem.)
	2. Transformar o formulário em um componente reutilizável com um `prop` que muda comportamento (já feito): `FormComponent({ mode })`. (Arquivo: **`src/components/FormComponent.tsx`** — destaque a prop `mode` e o bloco `if (mode === 'birth') ... else ...` onde o cálculo difere.)
	3. Criar uma nova página que importa `FormComponent` e passa `mode="future"`. (Arquivo: **`src/pages/EventCountdown.tsx`** — mostre que ele usa `<FormComponent mode="future" />`.)
	4. Garantir validação e limites iguais usando `validation.ts` (não duplicar schema). (Arquivo: **`src/validation.ts`**.)
	5. Testar manualmente: abrir `/event`, inserir uma data futura, validar resultado anos+meses+dias. Mostre o cálculo acontecendo no componente de resultados. (Arquivo: **`src/components/Results.tsx`**.)
	6. (Opcional) Extrair lógica de cálculo para um util para facilitar testes: criar `src/utils/dateDiff.ts` com função `diffDates(target, base, mode)` e usar no `FormComponent`.

	Ao demonstrar, mostre especificamente este trecho do `FormComponent` (linha onde `mode` é verificado) e explique as diferenças menores: no modo `future` nós calculamos diferença `target - today` e no `birth` calculamos `today - birthDate`.

4) Demonstração ao vivo (30-40s)
- No modo Birth (página `/`): insira uma data de nascimento e clique; mostre o resultado (anos, meses, dias).
- Em seguida clique na aba "Event" (ou vá para `/event`) e insira uma data futura; mostre que o mesmo formulário reaproveitado agora calcula tempo restante.
- Código a destacar enquanto demonstra: **`src/components/FormComponent.tsx`** (trecho do onSubmit) e **`src/pages/EventCountdown.tsx`** (onde mode="future" é passado).

5) Repositório, tag e deploy (15s)
- Mostre o repositório no GitHub, a tag **`v1.0.0`** e diga que o deploy está no Vercel.

6) Fechamento (5-10s)
- "Obrigado — links para o repo, live e tag estão na descrição."

Marcação visual obrigatória no vídeo
- A sua face deve aparecer simultaneamente com a tela durante todo o vídeo (usar Picture-in-Picture ou gravação com webcam). Sugestão: use o Clipchamp como gravador/editor.

Dicas de gravação
- Fale pausadamente. Aponte com o cursor para os trechos de código que indicar.
- Quando mostrar código, destaque visualmente (zoom ou marcação) as linhas:
	- `src/components/FormComponent.tsx` — a prop `mode` e o bloco de cálculo.
	- `src/pages/EventCountdown.tsx` — a chamada `<FormComponent mode="future" />`.
	- `src/main.tsx` e `src/App.tsx` — as rotas e links.
	- `src/validation.ts` — schema zod (para reforçar que validação é reaproveitada).

Arquivo salvo no repo e pronto para referência durante a gravação.

Frases prontas (falas curtas para cada seção)

- Intro (use 1 frase curta): "Olá — sou [Seu Nome], esse é o Age Calculator, feito com React + TypeScript."
- Explicação rápida (1-2 frases): "Aqui temos validação com Zod e react-hook-form. O formulário é reutilizável e também suporta calcular tempo até um evento futuro." 
- Pergunta / Resposta (linha pronta): "Para criar a página do evento eu adicionei uma rota e reaproveitei o `FormComponent` passando `mode='future'` — sem duplicar código." 
- Demonstração (frase de transição): "Agora eu vou demonstrar: primeiro na página Birth, depois em Event." 
- Encerramento (1 frase): "Obrigado — o link do repositório e o deploy estão na descrição."

Use essas frases como base; fale naturalmente e adapte para o seu tom.

Roteiro palavra a palavra (faça a leitura exata durante a gravação)

Intro (10s)
"Olá — sou [Seu Nome]. Este é o Age Calculator, feito com React, TypeScript, Vite e Tailwind. Vou mostrar a aplicação, o código e como eu reaproveitei o formulário para calcular o tempo até um evento futuro."

Explicação rápida (20s)
"A validação do formulário usa Zod com react-hook-form para garantir que dia, mês e ano sejam válidos. O componente de formulário é reutilizável: muda apenas o modo entre 'birth' e 'future'."

Pergunta / Resposta (40-50s) — leia exatamente:
"Pergunta: Como adicionar uma nova aba/página para calcular tempo até um evento sem duplicar o formulário? Resposta: 1) Adicione uma rota '/event' no roteador; 2) Reaproveite `FormComponent` passando a prop `mode='future'`; 3) Use o mesmo `schema` de validação em `validation.ts`; 4) Se desejar teste mais organizado, extraia a lógica de cálculo para um util."

Demonstração (30-40s) — falas curtas durante a ação
"Agora eu vou demonstrar: primeiro na página Birth, insiro uma data e clico em Calcular; depois clico em Event e insiro uma data futura para ver o tempo restante."

Encerramento (5-10s)
"Obrigado — o link para o repositório e o deploy estão na descrição."

Trechos de código para mostrar (arquivo + linhas exatas)

- `src/App.tsx`: linhas 82-88 — navbar e links (mostre como o NavLink destaca a página ativa).
	- Exibir: linhas 82-88

- `src/main.tsx`: linhas 10-13 — definição das rotas.
	- Exibir: linhas 10-13

- `src/components/FormComponent.tsx`:
	- Mostrar assinatura do componente: linha 12
	- Mostrar a verificação do `mode` e os dois blocos de cálculo: linhas 22-38
	- Mostrar inputs que instanciam `InputGroup`: linhas 48-51

- `src/pages/EventCountdown.tsx`: linhas 4-8 — componente que passa `mode="future"`.
	- Exibir: linhas 4-8

- `src/validation.ts`: linhas 5-12 — schema Zod (validação reaproveitada).
	- Exibir: linhas 5-12

- `src/components/Results.tsx`: linhas 9-16 — como os resultados são renderizados (anos/meses/dias).
	- Exibir: linhas 9-16

Instruções de destaque no vídeo
- Ao mostrar código, aplique zoom e mantenha o cursor visível na linha inicial do trecho indicado.
- Duração sugerida por trecho mostrado: 6–12 segundos para cada bloco de código.
- Sempre mantenha a webcam visível (Picture-in-Picture) enquanto fala.

Observação técnica rápida (para leitura):
- `FormComponent` (linha 12) recebe `mode` com valor padrão `'birth'`. No vídeo destaque que ao passar `mode='future'` (em `EventCountdown`) o cálculo inverte a direção (data alvo - hoje) e trata casos onde a data é anterior a hoje.

Arquivo salvo no repo com instruções palavra-a-palavra e números de linha para destaque.
