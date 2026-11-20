# RAIapp - Mobile

Run `bun fmt` to format the code.

This project was created using `bun init` in bun v1.4.5. [Bun](https://bun.com) is a fast all-in-one JavaScript runtime.

# RAIapp — Guia de instalação e execução

Este documento apresenta as instruções necessárias para configurar o ambiente de desenvolvimento, instalar as dependências e executar localmente o **RAIapp**.

## 1. Pré-requisitos

Antes de começar, instale as seguintes ferramentas:

| Ferramenta | Finalidade | Download |
|---|---|---|
| Git | Clonar o repositório | [git-scm.com](https://git-scm.com/downloads) |
| Bun | Instalar dependências e executar scripts | [bun.sh](https://bun.sh/) |
| Visual Studio Code | Editar e visualizar o código | [code.visualstudio.com](https://code.visualstudio.com/) |

**Importante:** o projeto utiliza Next.js, React e TypeScript. O Bun é utilizado como gerenciador de dependências e executor de scripts.

### 1.1. Verificar as instalações

Após instalar as ferramentas, abra o PowerShell ou o terminal do Visual Studio Code e execute:

```powershell
git --version
bun --version
```

Se os comandos retornarem os números das versões instaladas, as ferramentas estão disponíveis no terminal.

Caso algum comando não seja reconhecido, verifique a instalação e reinicie o terminal.

---

## 2. Baixando o projeto

Abra o PowerShell e navegue até o diretório no qual deseja armazenar o projeto.

Exemplo:

```powershell
cd "$HOME\Documents"
```

Clone o repositório:

```powershell
git clone https://github.com/iameloc/RAIapp.git
```

Entre na pasta do projeto:

```powershell
cd RAIapp
```

A partir deste momento, os próximos comandos devem ser executados dentro da pasta que contém o arquivo `package.json`.

### 2.1. Verificar se está no diretório correto

Execute:

```powershell
dir
```

A listagem deve apresentar arquivos e pastas do projeto, incluindo:

- `package.json`
- `app/`
- `components/`
- `public/`
- `bun.lock`

A presença desses arquivos indica que você está na raiz esperada da aplicação.

---

## 3. Instalando as dependências

Com o terminal aberto na raiz do projeto, execute:

```powershell
bun install
```

Esse comando instala as dependências declaradas no `package.json`, necessárias para executar a aplicação.

Durante a instalação, o Bun poderá baixar bibliotecas e criar a pasta `node_modules/`.

**Atenção:**
- É necessário possuir conexão com a internet durante a instalação.
- Não exclua o arquivo `bun.lock`, pois ele registra as versões das dependências.
- Em instalações futuras, execute novamente `bun install` para preparar o ambiente.

Aguarde até que o processo seja concluído.

---

## 4. Executando a aplicação

Depois de instalar as dependências, inicie o servidor de desenvolvimento:

```powershell
bun run dev
```

O Next.js iniciará o servidor local e disponibilizará a aplicação para acesso pelo navegador.

Quando a inicialização for concluída, o terminal deverá apresentar um endereço semelhante a:

```text
Local: http://localhost:3000
```

Abra o navegador e acesse:

**http://localhost:3000**

A aplicação estará em execução no ambiente local.

> Mantenha o terminal aberto enquanto estiver utilizando a aplicação. Fechar o terminal ou interromper o processo encerra o servidor de desenvolvimento.

### 4.1. Encerrando o servidor

Para interromper a execução, volte ao terminal e pressione:

```text
Ctrl + C
```

O servidor será encerrado.

---

## 5. Executando novamente o projeto

Depois que o ambiente estiver configurado, não é necessário clonar o repositório nem instalar todas as dependências novamente a cada execução.

Basta:

1. Abrir o terminal.
2. Entrar na pasta do projeto.
3. Executar o servidor.

Exemplo:

```powershell
cd "$HOME\Documents\RAIapp"
bun run dev
```

Depois, acesse novamente:

```text
http://localhost:3000
```

---

## 6. Comandos úteis

Os principais comandos utilizados durante o desenvolvimento são:

| Comando | Descrição |
|---|---|
| `bun install` | Instala as dependências |
| `bun run dev` | Inicia o servidor de desenvolvimento |
| `bun run build` | Gera a versão de produção |
| `bun run start` | Inicia o servidor de produção, após o build |
| `git status` | Verifica alterações no repositório |
| `git pull` | Atualiza o código local |
| `git add .` | Adiciona alterações ao controle de versão |
| `git commit -m "mensagem"` | Registra alterações |
| `git push` | Envia alterações ao GitHub |

Os comandos de build e start dependem da existência dos scripts correspondentes no `package.json`.

### 6.1. Gerando uma versão de produção

Para verificar se o projeto consegue gerar uma versão de produção, execute:

```powershell
bun run build
```

Após a conclusão bem-sucedida, execute:

```powershell
bun run start
```

Acesse o endereço indicado no terminal, normalmente:

```text
http://localhost:3000
```

Essa etapa é diferente da execução em modo de desenvolvimento: ela utiliza a versão compilada da aplicação.

---

## 7. Solução de problemas

### 7.1. O comando `bun` não é reconhecido

**Erro:**

```text
bun : O termo 'bun' não é reconhecido...
```

**Possível solução:**

1. Verifique se o Bun foi instalado.
2. Feche e abra novamente o PowerShell.
3. Execute `bun --version`.
4. Caso continue sem funcionar, confira se o diretório de instalação do Bun está incluído na variável de ambiente `PATH`.

### 7.2. O comando `git` não é reconhecido

**Erro:**

```text
git : O termo 'git' não é reconhecido...
```

**Possível solução:**

1. Instale o Git.
2. Verifique se a opção de disponibilizar o Git no terminal foi habilitada durante a instalação.
3. Reinicie o PowerShell.
4. Execute `git --version`.

### 7.3. Erro ao executar `bun install`

**Possíveis causas:**
- Conexão com a internet indisponível.
- Dependências não conseguiram ser baixadas.
- Terminal aberto no diretório errado.
- Problemas com o arquivo de lock ou com a instalação anterior.

**O que verificar:**

```powershell
dir
```

Confirme se o arquivo `package.json` está presente.

Em seguida, tente novamente:

```powershell
bun install
```

### 7.4. A porta 3000 já está sendo utilizada

Se outra aplicação já estiver utilizando a porta 3000, o Next.js poderá selecionar outra porta disponível.

Observe o endereço apresentado no terminal e utilize exatamente esse endereço no navegador.

Também é possível iniciar o projeto em outra porta:

```powershell
bun run dev -- -p 3001
```

Nesse caso, acesse:

```text
http://localhost:3001
```

### 7.5. Alterações não aparecem no navegador

Verifique se:

1. O servidor de desenvolvimento continua ativo.
2. O arquivo foi salvo no editor.
3. Você está acessando a aplicação correta.
4. O terminal não apresentou erros de compilação.

Se necessário, interrompa o servidor com `Ctrl + C` e inicie novamente:

```powershell
bun run dev
```

### 7.6. Erro ao clonar o repositório

Se o Git informar que o repositório não foi encontrado ou que o acesso foi negado, confira:

- Se a URL do repositório está correta.
- Se você possui permissão para acessar o repositório.
- Se sua autenticação no GitHub está configurada corretamente.

---

## 8. Estrutura do projeto

O RAIapp utiliza a organização de rotas do Next.js por meio do App Router.

Estrutura principal:

```text
RAIapp/
│
├── app/
│   ├── areamembro/
│   │   └── page.tsx
│   │
│   ├── avaliacao-cruzada/
│   │   └── page.tsx
│   │
│   ├── eixos/
│   │   └── [slug]/
│   │       └── page.tsx
│   │
│   ├── layout.tsx
│   └── page.tsx
│
├── components/
│   ├── MemberHeader.tsx
│   └── EixoContent.tsx
│
├── public/
│
├── package.json
├── bun.lock
└── README.md
```

### Principais diretórios

- `app/`: contém as páginas e rotas da aplicação.
- `app/areamembro/`: página da área do membro.
- `app/avaliacao-cruzada/`: página de avaliação entre membros.
- `app/eixos/[slug]/`: rota dinâmica para visualização dos eixos.
- `components/`: componentes reutilizáveis da interface.
- `public/`: arquivos estáticos utilizados pela aplicação.

---

## 9. Fluxo de trabalho para desenvolvimento

Para trabalhar no projeto, recomenda-se seguir este fluxo:

### 9.1. Atualizar o repositório

Antes de começar a desenvolver:

```powershell
git pull origin main
```

### 9.2. Iniciar o ambiente

```powershell
bun install
bun run dev
```

### 9.3. Realizar alterações

Abra o projeto no Visual Studio Code:

```powershell
code .
```

Faça as modificações necessárias e acompanhe o resultado pelo navegador.

### 9.4. Registrar as alterações

Após concluir o desenvolvimento:

```powershell
git status
git add .
git commit -m "Descrição da alteração"
git push origin main
```

Recomenda-se utilizar mensagens de commit curtas e descritivas, identificando o propósito de cada alteração.

---

## 10. Resumo rápido — Como rodar o projeto

Para quem já possui Git e Bun instalados, estes são os únicos comandos necessários para uma primeira execução:

```powershell
# 1. Clonar o repositório
git clone https://github.com/iameloc/RAIapp.git

# 2. Entrar na pasta
cd RAIapp

# 3. Instalar dependências
bun install

# 4. Iniciar o servidor
bun run dev
```

Acesse no navegador:

**http://localhost:3000**

Nas próximas execuções, basta entrar na pasta do projeto e executar:

```powershell
bun run dev
```

---

<p align="center">
  <strong>RAIapp</strong><br/>
  Sistema de gestão, acompanhamento e avaliação de membros.
</p>
