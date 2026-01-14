# Trabalho IEU - Sistema Solar em Realidade Virtual

## 📌 Identificação

* **Alunos:** David Carvalhido, Odília Acácio
* **Escola:** IPVC - ESTG
* **Disciplina:** Interação e Experiência de Utilizador
* **Ano:** 2025/2026

---

## 🎯 Objetivo do Projeto

Este projeto tem como objetivo o desenvolvimento de uma aplicação de **Realidade Virtual (VR)** que permita explorar o **Sistema Solar** de forma interativa e imersiva. A aplicação foi desenvolvida com a biblioteca **A-Frame**, recorrendo a tecnologias WebVR.

O utilizador pode observar os planetas, interagir com cada corpo celeste, consultar informação detalhada e responder a pequenos questionários (Quiz) associados a cada planeta.

---

## 🧰 Tecnologias Utilizadas

* **HTML5** – Estrutura da aplicação
* **JavaScript** – Lógica de interação e controlo
* **A-Frame** – Framework de Realidade Virtual baseada em Web
* **CSS** – Estilização dos controlos da interface
* **Web Audio API (A-Frame sound)** – Áudio ambiente e efeitos sonoros

---

## 🌌 Funcionalidades Principais

* Visualização 3D do Sistema Solar
* Animação de rotação e translação dos planetas
* Pausa e retoma das animações
* Áudio ambiente com controlo de som (ligar/desligar)
* Painel informativo por planeta contendo:
  * Nome do planeta
  * Imagem ilustrativa
  * Lista de especificações
  * Questionário interativo (quiz)
* Feedback visual no quiz (resposta correta a verde)

---

## 🖱️ Interação

* O utilizador pode navegar livremente pelo cenário
* Ao **pausar** o sistema, torna-se possível clicar nos planetas
* Ao selecionar um planeta:
  * Surge um painel informativo junto ao planeta
  * É possível consultar informação e responder ao quiz
* O painel pode ser fechado a qualquer momento

---

## 📁 Estrutura do Projeto

```
/assets
  /audio         -> Música ambiente
  /favicon       -> Ícone do projeto
  /panels        -> Imagens dos planetas para os painéis
  /textures      -> Texturas dos corpos celestes
/css
  style.css
/js
  pane_interaction.js
  pause_animations.js
  sound.js
index.html
README.md
server.js
```

---

## 📚 Contexto Académico

Este projeto foi desenvolvido no âmbito da disciplina **Interação e Experiência de Utilizador**, com o objetivo de aplicar conhecimentos de **Realidade Virtual**, programação Web e interação humano-computador.

O trabalho demonstra a aplicação prática de conceitos de ambientes imersivos, interfaces 3D e conteúdos educativos interativos.

---

## 🚀 Possíveis Melhorias Futuras

* Suporte completo para óculos VR
* Animações mais realistas das órbitas
* Sistema de pontuação no quiz
* Inclusão de mais informação científica
* Áudio específico por planeta
* Uso de uma framework para modo de Multi-user