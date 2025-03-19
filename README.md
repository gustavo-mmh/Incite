# Incite - Painel Administrativo com Dashboards

![GitHub repo size](https://img.shields.io/github/repo-size/gustavo-mmh/Incite)
![GitHub last commit](https://img.shields.io/github/last-commit/gustavo-mmh/Incite)
![GitHub stars](https://img.shields.io/github/stars/gustavo-mmh/Incite?style=social)

## 📌 Sobre o Projeto

O Projeto Incite é uma aplicação web full-stack desenvolvida utilizando a stack MERN (MongoDB, Express, React, Node.js). O objetivo principal deste projeto é fornecer uma plataforma para monitoramento e análise de redes, com foco em clientes conectados, seus padrões de acesso e informações relevantes para administradores de rede.

A aplicação oferece funcionalidades como:

*   **Dashboard Administrativo:**  Visão geral do estado da rede, com gráficos e mapas interativos.
*   **Gestão de Clientes:**  Listagem, cadastro, edição e exclusão de clientes da rede.
*   **Análise de Conexão:**  Visualização do tempo de conexão dos clientes, sites mais visitados, perfil de usuários (sistema operacional, dispositivo) e localização geográfica dos clientes.
*   **Gestão de Usuários Administrativos:**  Controle de acesso ao painel administrativo através da gestão de usuários com diferentes níveis de permissão (Administrador e Funcionário).

## 🚀 Tecnologias Utilizadas

O projeto foi desenvolvido com as seguintes tecnologias:

## Tecnologias Utilizadas

*   **Frontend:**
    *   [React](https://reactjs.org/) - Biblioteca JavaScript para construção de interfaces de usuário.
    *   [Create React App](https://create-react-app.dev/) - Ambiente para desenvolvimento rápido de aplicações React.
    *   [Material-UI](https://material-ui.com/) - Framework de componentes React para design elegante e responsivo.
    *   [Axios](https://axios-http.com/) - Cliente HTTP para realizar requisições ao backend.
    *   [React Router DOM](https://reactrouter.com/web/guides/quick-start) - Biblioteca para roteamento na aplicação React.
    *   [FusionCharts](https://www.fusioncharts.com/) e [react-fusioncharts](https://www.npmjs.com/package/react-fusioncharts) - Biblioteca para criação de gráficos e dashboards interativos.
    *   [google-maps-react](https://github.com/google-map-react/google-maps-react) - Biblioteca para integração com o Google Maps.
    *   [ApexCharts](https://apexcharts.com/) e [react-apexcharts](https://www.npmjs.com/package/react-apexcharts) - Biblioteca para criação de gráficos.

*   **Backend:**
    *   [Node.js](https://nodejs.org/en/) - Ambiente de execução JavaScript para o servidor.
    *   [Express](https://expressjs.com/) - Framework web minimalista e flexível para Node.js.
    *   [MongoDB](https://www.mongodb.com/) - Banco de dados NoSQL orientado a documentos.
    *   [Mongoose](https://mongoosejs.com/) - Modelagem de objetos MongoDB para Node.js.
    *   [jsonwebtoken](https://www.npmjs.com/package/jsonwebtoken) - Biblioteca para geração e verificação de tokens JWT para autenticação.
    *   [bcrypt](https://www.npmjs.com/package/bcrypt) - Biblioteca para hashing de senhas.
    *   [cors](https://www.npmjs.com/package/cors) - Middleware para habilitar CORS (Cross-Origin Resource Sharing).
    *   [cookie-parser](https://www.npmjs.com/package/cookie-parser) - Middleware para parsing de cookies HTTP.

## 📂 Estrutura do Projeto

```
├── .gitignore
├── .vscode
│ └── a.code-snippets (Snippets de código para VSCode)
├── client (Frontend React)
│ ├── .gitignore
│ ├── README.md (README do Frontend - Create React App)
│ ├── debug.log
│ ├── package-lock.json
│ ├── package.json (Dependências e scripts do Frontend)
│ ├── public (Arquivos públicos do Frontend)
│ │ ├── favicon.ico
│ │ ├── index.html (Página HTML principal)
│ │ ├── manifest.json
│ │ └── robots.txt
│ ├── src (Código fonte do Frontend)
│ │ ├── App.js (Componente principal do Frontend)
│ │ ├── assets (Recursos estáticos - imagens)
│ │ │ └── img
│ │ ├── components (Componentes React reutilizáveis)
│ │ ├── index.js (Ponto de entrada do Frontend)
│ │ ├── pages (Páginas/Views da aplicação)
│ │ │ ├── admin (Páginas do painel administrativo)
│ │ │ └── client (Páginas do lado do cliente - exemplo Home/Painel)
│ │ ├── routes.js (Configuração de rotas do Frontend)
│ │ └── services (Serviços - API, Autenticação)
│ └── yarn.lock
├── index.js
├── package-lock.json
├── package.json (Dependências e scripts do Backend)
├── public
│ ├── favicon.ico
│ ├── index.html
│ └── robots.txt
├── server.js (Ponto de entrada do Backend - Servidor Express)
└── src (Código fonte do Backend)
├── App.js (Componente App do Backend - não utilizado diretamente)
├── api.js (Exemplo de requisição API - pode ser removido/ajustado)
├── controllers (Controladores - lógica de negócio do Backend)
│ ├── clientes.controller.js
│ ├── produtos.controller.js
│ └── usuarios.controller.js
├── db (Configuração da conexão com o banco de dados)
│ └── index.js
├── index.css (Estilos globais - não utilizado aparentemente)
├── index.js (Ponto de entrada do Backend - não utilizado diretamente)
├── middleware.js (Middleware - pode conter middlewares personalizados)
├── models (Modelos de dados - Schemas do Mongoose)
│ ├── cliente.model.js
│ ├── produto.model.js
│ └── usuario.model.js
├── pages (Pastas de páginas duplicadas - src/pages e client/src/pages. src/pages parece ser backend, client/src/pages frontend)
│ └── ...
└── routes.js (Configuração de rotas do Backend)
```

## ⚙️ Como Rodar o Projeto

### 1️⃣ Clonar o Repositório

```sh
git clone https://github.com/gustavo-mmh/Incite.git
```

### 2️⃣ Configurar o Backend

```sh
cd Incite/backend
npm install
```

#### Configurar variáveis de ambiente (`.env`)

Crie um arquivo `.env` no diretório `backend` e adicione:

```
MONGO_URI=mongodb+srv://<user>:<password>@cluster.mongodb.net/incite
PORT=5000
JWT_SECRET=sua_chave_secreta
```

Inicie o servidor:

```sh
npm start
```

### 3️⃣ Configurar o Frontend

```sh
cd ../frontend
npm install
npm run dev
```

O frontend estará disponível em `http://localhost:5173/` e o backend em `http://localhost:5000/`.

## 📌 Funcionalidades

✅ Painel administrativo com gráficos interativos  
✅ Integração com banco de dados MongoDB  
✅ API RESTful para comunicação entre frontend e backend  
✅ Design responsivo e intuitivo  

## 📜 Licença

Este projeto está licenciado sob a **MIT License**. Sinta-se à vontade para contribuir e melhorar o projeto! 🚀  

## 🤝 Contribuição

Se deseja contribuir, siga os passos:

1. **Fork** este repositório
2. Crie uma nova **branch** (`git checkout -b minha-feature`)
3. Faça o **commit** das suas alterações (`git commit -m 'Adicionando nova feature'`)
4. Faça um **push** para a branch (`git push origin minha-feature`)
5. Abra um **Pull Request**  

---

🔗 **Autor:** [Gustavo M. Mello](https://github.com/gustavo-mmh)  
📫 Entre em contato para colaborações e feedbacks!
