# Anime Manager

## Descrição
Anime Manager é um aplicativo estilo Netflix onde você pode centralizar e organizar animes em categorias. O objetivo é criar uma experiência simplificada para encontrar e assistir animes de diferentes fontes.

## Domínio
- **Animes**

## Funcionalidades
- **Listar animes em sessões de categorias**: Visualize animes organizados em diferentes categorias, facilitando a navegação.
- **Adicionar fontes de conteúdo**: Permite adicionar links e fontes variadas para exibir o conteúdo dos animes.
- **Filtrar episódios por nome do anime**: Filtra episódios específicos com base no nome do anime.

## Como Inicializar o Projeto

Siga as instruções abaixo para inicializar o projeto em diferentes modos:

### Pré-requisitos

Certifique-se de ter o **Node.js** e o **npm** instalados na sua máquina. Além disso, crie um arquivo `.env` na raiz do projeto, se necessário, para definir variáveis de ambiente.

### Instalação

Primeiro, instale as dependências do projeto:
```bash
npm install
```
Para rodar o projeto utilize:
```bash
npm run dev
```
Para iniciar o projeto em modo de observação, onde ele recompila automaticamente ao detectar mudanças no código:
```bash
npm run watch
```
Para construir o projeto para produção e executá-lo, use o comando:
```bash
npm run start
```
Para executar diretamente a versão compilada (caso já tenha feito o build), use:
```bash
npm run start:dist
```



## Como Funciona

### Implementação para Listar Animes
- **Requisição**: `GET` 
- **Descrição**: Retorna uma lista de episódios organizados com detalhes como nome, link, categoria e capa do episódio.

#### Exemplo de Resposta
```json
[
  {
    "animeName": "Naruto",
    "episodio": "Naruto ep1",
    "idVideo": "erqwreqw",
    "cover": "link,img",
    "link": "http://youtube/naruto/ep1",
    "category": ["anime", "ação"]
  },
  {
    "animeName": "Naruto",
    "episodio": "Naruto ep2",
    "cover": "link,img",
    "link": "http://youtube/naruto/ep2",
    "category": ["anime", "ação"]
  }
]
```

### Filtrar Episódios por Nome do Anime
- **Requisição**: `GET` 
- **Descrição**: Retorna uma lista de episódios com base em um parâmetro enviado pelo cliente que especifica o nome do anime.

#### Exemplo de Requisição

bash
Copiar código
GET /episodios?animeName=Naruto

#### Exemplo de Código javascript
```javascript
//Copiar código
import { getFilterEp, getListEp } from './controllers/animes-controller';
import { Routes } from "./routes/routes";
import { HttpMethod } from "./utils/http-methods";
import * as http from "http";

// Controle de Rotas
export const app = async (req: http.IncomingMessage, res: http.ServerResponse) => {

    // Extrai o caminho base da URL
    const baseUrl = req.url?.split("?")[0];
    
    // Rota para listar animes
    if (req.method === HttpMethod.GET && baseUrl === Routes.List) {
        await getListEp(req, res);
    }

    // Rota para filtrar animes
    if (req.method === HttpMethod.GET && baseUrl === Routes.Filter) {
        await getFilterEp(req, res);
    }
}
```
## Tecnologias Utilizadas

Este projeto foi desenvolvido utilizando as seguintes tecnologias e ferramentas:

- **Node.js** - Ambiente de execução JavaScript server-side.
- **TypeScript** - Superconjunto do JavaScript que adiciona tipos estáticos, facilitando a escalabilidade do projeto.
- **Tsup** - Empacotador de JavaScript para construção rápida e otimizada do projeto.
- **TSX** - Ferramenta que facilita a execução de arquivos TypeScript sem necessidade de compilação prévia.
- **@types/node** - Tipos do Node.js para suporte completo ao TypeScript.

Essas dependências garantem que o projeto seja rápido, escalável e fácil de desenvolver com TypeScript, além de oferecer suporte a comandos personalizados de execução e build.

Anime Manager é um projeto ideal para centralizar e organizar seu conteúdo de animes, facilitando o acesso e o gerenciamento de fontes e episódios.