<div align="center">

# 🧮 Calculadora

Aplicação web para realizar as quatro operações matemáticas básicas, desenvolvida em **React** com **Vite**.

[![React](https://img.shields.io/badge/React-19-61DAFB?logo=react&logoColor=white)](https://react.dev/)
[![Vite](https://img.shields.io/badge/Vite-8-646CFF?logo=vite&logoColor=white)](https://vitejs.dev/)
[![License](https://img.shields.io/badge/license-acad%C3%AAmico-lightgrey)](#licença)

</div>

---

## 📋 Sumário

- [Funcionalidades](#-funcionalidades)
- [Tecnologias utilizadas](#-tecnologias-utilizadas)
- [Estrutura do projeto](#-estrutura-do-projeto)
- [Pré-requisitos](#-pré-requisitos)
- [Instalação](#-instalação)
- [Execução](#-execução)
- [Como utilizar](#-como-utilizar)
- [Licença](#-licença)

---

## ✨ Funcionalidades

- Cálculo de soma, subtração, multiplicação e divisão
- Seleção da operação através de um campo `select`
- Botão para limpar os campos e reiniciar o formulário
- Validação de campos obrigatórios
- Tratamento de divisão por zero
- Exibição do resultado com duas casas decimais

## 🛠️ Tecnologias utilizadas

<div align="center">

| Tecnologia | Finalidade |
|:---:|:---:|
| [React](https://react.dev/) | Biblioteca para construção da interface |
| [Vite](https://vitejs.dev/) | Ferramenta de build e servidor de desenvolvimento |
| CSS Modules | Estilização isolada por componente |

</div>

## 📁 Estrutura do projeto

```
src/
├── components/
│   ├── FormCalculadora.jsx        # Componente principal da calculadora
│   └── FormCalculadora.module.css # Estilos do componente
├── App.jsx
└── main.jsx
```

## ✅ Pré-requisitos

- [Node.js](https://nodejs.org/) instalado (versão 18 ou superior recomendada)

## 📦 Instalação

Clone ou extraia o projeto e, na raiz da pasta, instale as dependências:

```bash
npm install
```

## ▶️ Execução

Para rodar o projeto em modo de desenvolvimento:

```bash
npm run dev
```

A aplicação estará disponível em `http://localhost:5173` (ou na porta indicada pelo terminal).

Para gerar a versão de produção:

```bash
npm run build
```

## 💡 Como utilizar

<div align="center">

| Passo | Ação |
|:---:|---|
| 1 | Informe o **primeiro número** |
| 2 | Selecione a **operação** desejada (+, -, *, /) |
| 3 | Informe o **segundo número** |
| 4 | Clique em **Calcular** para ver o resultado, ou em **Limpar** para reiniciar |

</div>

## 📄 Licença

Projeto desenvolvido para fins acadêmicos.

---

<div align="center">

Desenvolvido com React ⚛️

</div>
