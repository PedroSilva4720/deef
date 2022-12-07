# Deef

## 😄 Sobre o projeto

Projeto para estudos pessoais, no qual utilizo html, css, a stack de Node, React, Vite, entre outros para desenvolver habilidades.

## 🤔 Como instalar

Clone esse repositório:

> ```bash
>git clone https://github.com/PedroSilva4720/deef.git
> ```

Instale as dependências utilizando yarn

```bash
yarn 
```

Preencha o arquivo ```.env``` seguindo o arquivo ```example.env``` na pasta ```packages/api``` com os dados do banco postgres e uma secret para ser utilizada pelo JWT

E por fim rode a aplicação em ambiente de desenvolvimento em cada um dos ambientes:  
```yarn workspace @deef/web dev```  
```yarn workspace @deef/api dev```

## 🧐 Conhecimentos

Algumas das principais tecnologias utilizadas / feats que aprendi e desenvolvi nesse projeto:

>### Api
>
>> #### Feats api
>>
>> - Hash da senha para não salvar dados sensíveis no banco de dados
>> - Utilização de Json Web Token (jwt) para autenticação dos usuários
>> - Middlewares para autenticação e possibilitar a continuidade da rota
>> - Documentação de rotas com swagger
>> - Banco de dado Postgres  
>>
>> #### Tecnologias api
>>
>> - [Express](https://www.npmjs.com/package/express)
>> - [Prisma](https://www.prisma.io)
>> - [Prettier](https://prettier.io)
>> - [Argon2](https://www.npmjs.com/package/argon2)
>> - [Commitizen](https://www.npmjs.com/package/commitizen)
>> - [Swagger](https://swagger.io)  
>
> ### Web
>
>> #### Feats Web
>>
>> - Componentização de Elementos
>> - Acessibilidade
>> - Tema, onde é armazenado todas as variáveis de tamanhos e cores
>> - Documentação de componentes com storybook  
>>
>> #### Tecnologias web
>>
>> - [Prettier](https://prettier.io)
>> - [Stitches](https://stitches.dev)
>> - [Radix](https://www.radix-ui.com)
>> - [Storybook](https://storybook.js.org)
