/* const { writeDataToExcel } = require('../utils/excelWriter');

const GROUP_NAME = 'Report HOMEBASED e PISO';

function handleIncomingMessage(message) {
  if (!message.body || message.type !== 'chat') return;

  message.getChat().then(chat => {
    if (chat.isGroup && chat.name === GROUP_NAME) {
      const parsed = parseMessage(message.body);
      if (parsed) {
        writeDataToExcel(parsed);
        console.log('📥 Dados coletados e salvos com sucesso.');
      }
    }
  }).catch(console.error);
}

function parseMessage(text) {
  const fields = [
    'Matricula do colaborador',
    'Etiqueta TI',
    'Serial',
    'Horário de atividade',
    'Chamado da atividade',
    'Erro',
    'Solução',
    'Local'
  ];

  const data = {};

  for (const field of fields) {
    const regex = new RegExp(`${field}:\\s*(.*?)(?=\\n\\w|$)`, 'i');
    const match = text.match(regex);
    data[field] = match ? match[1].trim() || 'N/A' : 'N/A';
  }

  return data;
}

module.exports = { handleIncomingMessage };
 */