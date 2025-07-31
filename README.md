
# 📊 WhatsApp Group Data Collector Bot

A Node.js bot that connects to a specific WhatsApp group and **automatically collects messages following a predefined format**, storing them into a daily Excel file.

## 🌍 Description (English)

This bot uses the `whatsapp-web.js` library to listen to messages from a specific group and extract structured data. The extracted information is saved in an Excel file (`.xlsx`) each day.

### ✅ Features

- Monitors a specific WhatsApp group (defined in `config/groupName.js`)
- Extracts data based on a message pattern
- Saves the data to an Excel file in the system's **Documents** folder
- One Excel file is created per day with the format: `Dados_Coletados_WPP - DDMMYYYY.xlsx`
- **Since version 0.2.0**, automatic Excel saving is scheduled for **7:00 PM (Brasília time)** — this time can be customized
- Cleans previous day data to prevent duplication in future saves

### 📂 Project Structure

```
whatsapp-bot/
├── sessions/               # WhatsApp session info
├── utils/
│   ├── extractData.js      # Extracts structured data from messages
│   └── saveToExcel.js      # Handles Excel writing and scheduling
├── config/
│   └── groupName.js        # Group name to monitor
├── index.js                # Main bot logic
├── package.json
```

---

## 🌎 Descrição (Português)

Este bot usa a biblioteca `whatsapp-web.js` para se conectar a um grupo específico do WhatsApp e **coletar automaticamente mensagens com um formato definido**, salvando os dados extraídos em um arquivo Excel diário.

### ✅ Funcionalidades

- Monitora um grupo específico do WhatsApp (definido em `config/groupName.js`)
- Extrai dados seguindo um padrão de mensagem
- Salva as informações extraídas em um arquivo Excel na pasta **Documentos** do sistema
- Um novo arquivo é criado diariamente no formato: `Dados_Coletados_WPP - DDMMYYYY.xlsx`
- **A partir da versão 0.2.0**, o salvamento automático é feito diariamente às **19:00 (horário de Brasília)** — este horário pode ser alterado
- Os dados são limpos após o salvamento para evitar duplicações no dia seguinte

### 📂 Estrutura do Projeto

```
whatsapp-bot/
├── sessions/               # Informações da sessão do WhatsApp
├── utils/
│   ├── extractData.js      # Extrai os dados das mensagens
│   └── saveToExcel.js      # Responsável por salvar e agendar o Excel
├── config/
│   └── groupName.js        # Nome do grupo monitorado
├── index.js                # Lógica principal do bot
├── package.json
```

---

## ⚙️ Requisitos

- Node.js 18+  
- WhatsApp Web active session  

---

## 🚀 Instalação

```bash
git clone https://github.com/wallacex19/Whatsapp_Colector
cd whatsapp-bot
npm install
node index.js
```

---

## 👨‍💻 Desenvolvedor Principal / Main Developer

**ARIEL WALLACE**

## 📄 Licença

MIT © ARIEL WALLACE

