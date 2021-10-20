<p align="center">
  <img src=".github/logo.svg" />
</p>

<p align="center" >
   <a href="https://www.linkedin.com/in/vitor-pereira-309a7319b/">
     <img src="https://img.shields.io/badge/Made%20By-Vitor%20Pereira-blue" />
   </a>
   <img src="https://img.shields.io/github/languages/top/vitorpedeo/nlw-heat-node" />
   <img src="https://img.shields.io/github/last-commit/vitorpedeo/nlw-heat-node?color=blue" />
</p>

---

<p align="center" >
   <img src=".github/app.png" />
</p>

<p align="center">
  Aplicativo onde os usuários podem deixar comentários sobre suas expectativas em
  relação ao
    <a href="https://dowhile.io">
      DoWhile 2021.
    </a>
</p>

---

<h2>:rocket: Tecnologia utilizada</h2>

<p align="center">
  <a href="https://nodejs.org/en/">
    <img src=".github/tech.svg" />
  </a>
</p>

---

<h2>:zap:Bibliotecas utilizadas</h2>

- [prisma](https://www.prisma.io/) - ORM completo para lidar com banco de dados.

- [socket.io](https://socket.io/) - Criação de web sockets.

- [typescript](https://www.typescriptlang.org/) - Linguagem fortemente tipado com base no Javascript.

---

<h2>:hammer:Instalação</h2>

Primeiramente, é necessário ter instalado o [yarn](https://yarnpkg.com/) na sua máquina.

Clone o repositório e vá para a pasta raiz do projeto

```shell
git clone https://github.com/vitorpedeo/nlw-heat-node.git
```

```shell
cd nlw-heat-node
```

Instale todas as dependências

```shell
yarn install
```

Crie um arquivo _env_ seguindo a estrutura do arquivo _.env.example_

Rode as migrations do prisma

```shell
yarn prisma migrate dev
```

Inicie a aplicação

```shell
yarn dev
```
